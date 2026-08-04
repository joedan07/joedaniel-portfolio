const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="plate">SEC.01</span>
        <h2 className="section-title">About Me</h2>
        <div className="hazard" />
      </div>

      <div className="about-grid">
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
