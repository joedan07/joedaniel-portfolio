import { useEffect, useState } from 'react';

const Navbar = ({ sections, active, onNavigate }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="navbar">
      <button
        className="nav-logo cursor-target"
        onClick={() => onNavigate(0)}
        aria-label="Back to top"
      >
        JD
      </button>

      <nav className="nav-links">
        {sections.slice(1).map((s, i) => (
          <button
            key={s.id}
            className={`nav-link cursor-target${active === i + 1 ? ' nav-link--active' : ''}`}
            onClick={() => onNavigate(i + 1)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="nav-status">
        <span className="nav-clock">{time}</span>
        <span className="led led--green led--blink" title="System online" />
        <span className="led led--amber" />
      </div>
    </header>
  );
};

export default Navbar;
