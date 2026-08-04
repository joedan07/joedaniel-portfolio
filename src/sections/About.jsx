import { Component, lazy, Suspense, useCallback, useState } from 'react';

// The 3D lanyard pulls in three.js + physics, so it loads lazily to keep the
// initial bundle small. If WebGL is unavailable, errors, or loses its context,
// we fall back to the static ID badge so the section never breaks.
const Lanyard = lazy(() => import('../components/reactbits/Lanyard'));

class LanyardBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

const StaticBadge = () => (
  <div className="id-badge">
    <div className="id-badge__strap" aria-hidden="true" />
    <div className="id-badge__clip" aria-hidden="true" />
    <div className="id-badge__card panel cursor-target">
      <span className="screw screw--bl" />
      <span className="screw screw--br" />
      <div className="id-badge__header">PERSONNEL // ACCESS CARD</div>
      <div className="id-badge__photo">
        <img src="/assets/images/profile.jpg" alt="Joe Daniel" />
      </div>
      <div className="id-badge__name">JOE DANIEL</div>
      <div className="id-badge__role">B.TECH CSE — FULL-STACK / INFOSEC</div>
      <div className="id-badge__barcode" aria-hidden="true" />
      <div className="id-badge__footer">
        <span className="led led--green led--blink" /> ACCESS: ALL AREAS
      </div>
    </div>
  </div>
);

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

const About = () => {
  const [glFailed, setGlFailed] = useState(() => !supportsWebGL());
  const onContextLost = useCallback(() => setGlFailed(true), []);

  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="plate">SEC.01</span>
        <h2 className="section-title">About Me</h2>
        <div className="hazard" />
      </div>

      <div className="about-grid">
        <div className="about-lanyard">
          {glFailed ? (
            <StaticBadge />
          ) : (
            <LanyardBoundary fallback={<StaticBadge />}>
              <Suspense
                fallback={
                  <div className="lanyard-loading">
                    <span className="plate">
                      <span className="led led--amber led--blink" /> LOADING BADGE…
                    </span>
                  </div>
                }
              >
                <Lanyard
                  position={[0, 0, 15.5]}
                  gravity={[0, -40, 0]}
                  frontImage="/assets/images/card-front.png"
                  backImage="/assets/images/card-back.png"
                  imageFit="cover"
                  onContextLost={onContextLost}
                />
                <span className="about-lanyard__hint plate">GRAB THE BADGE ↑ GIVE IT A SWING</span>
              </Suspense>
            </LanyardBoundary>
          )}
        </div>

        <div className="about-panel panel">
          <span className="screw screw--tl" />
          <span className="screw screw--tr" />
          <span className="screw screw--bl" />
          <span className="screw screw--br" />
          <span className="plate about-panel__plate">PERSONNEL FILE — JD/2026</span>
          <p>
            I am a B.Tech Computer Science student specializing in{' '}
            <span className="hl-amber">Cybersecurity, Blockchain, and IoT</span>, with a strong interest in
            building <span className="hl-white">secure, scalable systems</span>. I am particularly driven by
            how technology can streamline operations, enhance digital experiences, and solve real-world
            problems efficiently.
          </p>
          <p>
            Over time, I have worked on projects involving automation, system design, and practical
            implementations that focus on reliability and performance. Alongside my technical work, I have
            taken on leadership responsibilities, serving as a <span className="hl-amber">Tech Lead</span> in
            school where I successfully livestreamed large-scale events, managed digital platforms, and
            collaborated on media production for a <span className="hl-white">TEDx event</span>.
          </p>
          <p>
            I aim to continuously expand my technical depth while developing strong leadership and
            problem-solving capabilities. My long-term goal is to contribute to and lead{' '}
            <span className="hl-amber">impactful tech initiatives</span> that prioritize security,
            scalability, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
