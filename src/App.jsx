import { useCallback, useEffect, useState } from 'react';
import TargetCursor from './components/reactbits/TargetCursor';
import ClickSpark from './components/reactbits/ClickSpark';
import ScrollVelocity from './components/reactbits/ScrollVelocity';
import CursorField from './components/CursorField';
import Navbar from './components/Navbar';
import NavDial from './components/NavDial';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { SECTIONS } from './data/content';

function Divider({ texts }) {
  return (
    <div className="marquee" aria-hidden="true">
      <ScrollVelocity texts={texts} velocity={55} numCopies={8} className="marquee-copy" />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('custom-cursor', finePointer);
    return () => document.body.classList.remove('custom-cursor');
  }, [finePointer]);

  // Scroll spy: the section whose top has passed 40% of the viewport is active.
  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const mid = window.scrollY + window.innerHeight * 0.4;
        let current = 0;
        SECTIONS.forEach((s, i) => {
          const el = document.getElementById(s.id);
          if (el && el.offsetTop <= mid) current = i;
        });
        setActiveSection(current);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToSection = useCallback(index => {
    document.getElementById(SECTIONS[index].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <CursorField />
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgress />
      <ClickSpark sparkColor="#ffb454" sparkSize={11} sparkRadius={24} sparkCount={10} duration={480} />
      {finePointer && (
        <TargetCursor
          spinDuration={2.4}
          hideDefaultCursor
          cursorColor="#ffffff"
          cursorColorOnTarget="#ffb454"
        />
      )}
      <Navbar sections={SECTIONS} active={activeSection} onNavigate={scrollToSection} />
      <NavDial sections={SECTIONS} active={activeSection} onSelect={scrollToSection} />
      <main className="content">
        <Hero onNavigate={scrollToSection} />
        <Divider texts={['SECURE • SCALABLE • REAL-WORLD •', 'FULL-STACK ✦ INFOSEC ✦ BLOCKCHAIN ✦ IOT ✦']} />
        <About />
        <TechStack />
        <Divider texts={['SHIPPED, NOT SHELVED •', 'BUILD ✦ BREAK ✦ HARDEN ✦ REPEAT ✦']} />
        <Projects />
        <Experience />
        <Divider texts={['OPEN CHANNEL — SAY HELLO •', "LET'S BUILD SOMETHING ✦"]} />
        <Contact />
      </main>
    </>
  );
}
