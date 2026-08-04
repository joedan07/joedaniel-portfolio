import { EXPERIENCE } from '../data/content';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <span className="plate">SEC.04</span>
        <h2 className="section-title">Leadership &amp; Experience</h2>
        <div className="hazard" />
      </div>

      <div className="rack">
        {EXPERIENCE.map(item => (
          <article key={item.unit} className="rack-unit panel cursor-target">
            <span className="screw screw--tl" />
            <span className="screw screw--tr" />
            <span className="screw screw--bl" />
            <span className="screw screw--br" />
            <div className="rack-unit__meta">
              <span className="plate">{item.unit}</span>
              <span className="led led--cyan" />
            </div>
            <div className="rack-unit__content">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
            <div className="rack-unit__vents" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
