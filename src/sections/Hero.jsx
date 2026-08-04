import RotatingText from '../components/reactbits/RotatingText';
import { ROLES, TAGLINE, LINKS } from '../data/content';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__status">
          <span className="plate">
            <span className="led led--green led--blink" /> SYS.ONLINE
          </span>
          <span className="plate">PORTFOLIO v2.0</span>
          <span className="plate hero__status-wide">B.TECH CSE — CYBERSEC / BLOCKCHAIN / IOT</span>
        </div>

        <h1 className="hero__name">JOE DANIEL</h1>

        <div className="hero__role-row">
          <span className="hero__role-label">// CURRENT MODE:</span>
          <RotatingText
            texts={ROLES}
            mainClassName="role-plate"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.02}
            splitLevelClassName="role-plate__word"
            transition={{ type: 'spring', damping: 32, stiffness: 500 }}
            rotationInterval={3400}
          />
        </div>

        <p className="hero__tagline">{TAGLINE}</p>

        <div className="hero__buttons">
          <button className="key-btn key-btn--primary cursor-target" onClick={() => onNavigate(3)}>
            View Projects →
          </button>
          <button className="key-btn cursor-target" onClick={() => onNavigate(5)}>
            Contact Me
          </button>
          <a
            className="key-btn key-btn--square cursor-target"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="key-btn key-btn--square cursor-target"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="hero__stickers" aria-hidden="true">
          <span className="sticker sticker--1">TEDx CREW ★</span>
          <span className="sticker sticker--2">CTRL+ALT+DEFEND</span>
          <span className="sticker sticker--3">SHIPPED TO CHROME STORE</span>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <span className="hero__scroll-arrow">▾</span>
      </div>
    </section>
  );
};

export default Hero;
