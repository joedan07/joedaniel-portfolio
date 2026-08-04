import BorderGlow from '../components/reactbits/BorderGlow';
import { PROJECTS } from '../data/content';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="plate">SEC.03</span>
        <h2 className="section-title">Projects</h2>
        <div className="hazard" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map(project => (
          <BorderGlow
            key={project.title}
            className="project-glow"
            edgeSensitivity={18}
            glowColor="36 95 68"
            backgroundColor="#10141c"
            borderRadius={18}
            glowRadius={34}
            glowIntensity={1}
            coneSpread={28}
            colors={['#ffb454', '#5fd7ff', '#ff6b9d']}
          >
            <article className="project-card cursor-target">
              <header className="project-card__head">
                <span className="plate">{project.unit}</span>
                <span className="project-card__status">
                  <span
                    className={`led ${project.status === 'LIVE' ? 'led--green led--blink' : 'led--amber'}`}
                  />
                  {project.status}
                </span>
              </header>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="project-card__actions">
                  <a
                    className="key-btn key-btn--primary cursor-target"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel} ↗
                  </a>
                </div>
              )}
            </article>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
};

export default Projects;
