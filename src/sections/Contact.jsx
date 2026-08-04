import BorderGlow from '../components/reactbits/BorderGlow';
import { LINKS } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-head">
        <span className="plate">SEC.05</span>
        <h2 className="section-title">Contact</h2>
        <div className="hazard" />
      </div>

      <BorderGlow
        className="contact-glow"
        edgeSensitivity={16}
        glowColor="36 95 68"
        backgroundColor="#10141c"
        borderRadius={22}
        glowRadius={40}
        glowIntensity={1.1}
        coneSpread={25}
        colors={['#ffb454', '#5fd7ff', '#52ffa8']}
      >
        <div className="contact-panel">
          <span className="plate">
            <span className="led led--green led--blink" /> CHANNEL OPEN — TRANSMISSION READY
          </span>
          <h3 className="contact-panel__title">Let&apos;s build something real.</h3>
          <p className="contact-panel__text">
            I am always open to discussing system architecture, new technology stacks, and collaborative
            opportunities. Feel free to explore my code or reach out directly.
          </p>
          <div className="contact-panel__buttons">
            <a className="key-btn key-btn--primary cursor-target" href={`mailto:${LINKS.email}`}>
              <FaEnvelope /> Email Me
            </a>
            <a
              className="key-btn cursor-target"
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              className="key-btn cursor-target"
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
          <div className="contact-panel__meta">{LINKS.email}</div>
        </div>
      </BorderGlow>

      <footer className="footer">
        <span>© 2026 JOE DANIEL — TACTILE TECH CONSOLE v2.0</span>
        <span>REACT + VITE • BEST EXPERIENCED IN A DARK ROOM</span>
      </footer>
    </section>
  );
};

export default Contact;
