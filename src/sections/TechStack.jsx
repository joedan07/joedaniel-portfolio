import LogoLoop from '../components/reactbits/LogoLoop';
import { SKILLS_JSON } from '../data/content';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiDart,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiSupabase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma
} from 'react-icons/si';

const techLogos = [
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiPython />, title: 'Python' },
  { node: <SiReact />, title: 'React' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiSupabase />, title: 'Supabase' },
  { node: <SiPostgresql />, title: 'PostgreSQL' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiHtml5 />, title: 'HTML5' },
  { node: <SiCss />, title: 'CSS' },
  { node: <SiFlutter />, title: 'Flutter' },
  { node: <SiDart />, title: 'Dart' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiGithub />, title: 'GitHub' },
  { node: <SiVercel />, title: 'Vercel' },
  { node: <SiFigma />, title: 'Figma' }
];

const TechStack = () => {
  return (
    <section id="stack" className="section">
      <div className="section-head">
        <span className="plate">SEC.02</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="hazard" />
      </div>

      <div className="crt panel">
        <span className="screw screw--tl" />
        <span className="screw screw--tr" />
        <span className="screw screw--bl" />
        <span className="screw screw--br" />
        <div className="crt__header">
          <span className="crt__dot crt__dot--red" />
          <span className="crt__dot crt__dot--yellow" />
          <span className="crt__dot crt__dot--green" />
          <span className="crt__title">joe@console: ~/skills</span>
          <span className="led led--green led--blink" />
        </div>
        <div className="crt__screen">
          <p className="crt__line">
            <span className="crt__prompt">➜</span> cat skills.json
          </p>
          <pre className="crt__code">{SKILLS_JSON}</pre>
          <p className="crt__line">
            <span className="crt__prompt">➜</span> <span className="crt__cursor">_</span>
          </p>
        </div>
      </div>

      <div className="logo-strip">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={40}
          gap={56}
          hoverSpeed={18}
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0c10"
          ariaLabel="Technology stack"
        />
      </div>
    </section>
  );
};

export default TechStack;
