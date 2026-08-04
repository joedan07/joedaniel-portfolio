import OptionWheel from './reactbits/OptionWheel';

// Fixed right-hand "channel selector": a machined housing around OptionWheel.
// Scroll, drag, click or arrow-key it to jump between sections; it also tracks
// the section you scroll to manually.
const NavDial = ({ sections, active, onSelect }) => {
  return (
    <aside className="nav-dial" aria-label="Section navigator">
      <div className="nav-dial__housing panel">
        <span className="screw screw--tl" />
        <span className="screw screw--tr" />
        <span className="screw screw--bl" />
        <span className="screw screw--br" />
        <div className="nav-dial__top">
          <span className="plate">NAV DIAL</span>
          <span className="led led--amber led--blink" />
        </div>
        <div className="nav-dial__wheel">
          <OptionWheel
            items={sections.map(s => s.label)}
            defaultSelected={0}
            selected={active}
            onChange={index => onSelect(index)}
            side="right"
            textColor="#5b6472"
            activeColor="#ffb454"
            fontSize={1.05}
            spacing={1.9}
            curve={1}
            tilt={7}
            blur={1.2}
            fade={0.3}
            minOpacity={0.08}
            smoothing={170}
            inset={26}
            loop={false}
            draggable
            soundUrl="/sounds/tick.wav"
            soundVolume={0.22}
            className="nav-dial__optionwheel"
          />
          <div className="nav-dial__notch" aria-hidden="true" />
        </div>
        <div className="nav-dial__bottom">
          <span className="nav-dial__readout">
            CH {String(active + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default NavDial;
