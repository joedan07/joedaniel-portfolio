# JD-02 — Joe Daniel, Portfolio

**A personal site built as a piece of hardware.**

Brushed metal. Mechanical keys. Status LEDs. A CRT that shouldn't be there. Then a particle field that follows your cursor and a marquee that will not sit still.

Skeuomorphism said the screen should imitate the world. Flat design said stop pretending. This is the third option: **imitate a world that never existed.**

[**▸ Power on**](https://joedaniel-portfolio.vercel.app) · Rev A preserved in [`legacy/`](./legacy)

---

## Specifications

| | |
|---|---|
| **Model** | JD-02 (`v2.0.0`) |
| **Chassis** | React 19 · Vite 7 |
| **Render pipeline** | three.js · @react-three/fiber · drei |
| **Physics** | @react-three/rapier |
| **Motion** | GSAP · Motion (Framer) |
| **Panels** | Hero · About · TechStack · Projects · Experience · Contact |
| **Input** | Pointer-tracked. The cursor is a first-class citizen, not an afterthought. |
| **Power draw** | Immoderate. Deliberately. |
| **Housing** | Vercel |

---

## Design brief

Portfolio sites converge. Same white background, same generous whitespace, same tasteful fade-up on scroll. Restraint is good taste and good taste is now the default, which makes it invisible.

So JD-02 goes the other way, under three rules:

**Every surface should look like it has a temperature.** Brushed metal catches light. A key looks like it would depress. An LED is either lit or it isn't. Materials suggest an object exists in a room, even though nothing here does.

**Motion is the interface, not the garnish.** The particle field responds to the pointer because a console should feel *live* — powered on and waiting. Sparks on click, glow on focus, velocity on scroll. These are feedback, not decoration.

**Maximalism needs more discipline than minimalism, not less.** Twenty things moving at once only works if each one has a job. Cut anything that's moving because it can.

---

## Bench setup

```bash
git clone https://github.com/joedan07/joedaniel-portfolio.git
cd joedaniel-portfolio
npm install
npm run dev
```

Unit comes up on [localhost:5173](http://localhost:5173).

```bash
npm run build     # → dist/
npm run preview   # serve the production build locally
```

---

## Board layout

```
src/
  components/
    reactbits/     → integrated React Bits parts
                     OptionWheel · BorderGlow · ClickSpark
                     RotatingText · ScrollVelocity · LogoLoop · TargetCursor
    ...            → custom parts
                     CursorField · NavDial · Navbar · ScrollProgress
  sections/        → Hero · About · TechStack · Projects · Experience · Contact
  data/
    content.js     → ★ every word on the site lives here
  styles/
    index.css      → design system — the material layer
    sections.css   → per-panel styling
legacy/            → the original static site, untouched
public/
```

### The one file that matters

`src/data/content.js` holds all copy, projects, roles, and links. Adding a project means editing one object — no JSX, no component hunting. The chassis and the payload are separate on purpose.

---

## Parts list

| Part | Job |
|---|---|
| `three` + `@react-three/fiber` | The 3D layer, driven declaratively from React |
| `@react-three/drei` | Helpers so the scene code stays readable |
| `@react-three/rapier` | Physics — things fall, collide, and settle honestly |
| `gsap` | Timeline choreography where sequencing matters |
| `motion` | Component-level enter/exit and layout transitions |
| `meshline` | Lines with actual thickness (WebGL won't do this natively) |
| `react-icons` | Iconography |

[React Bits](https://reactbits.dev) components are vendored into `src/components/reactbits/` rather than installed, so each one can be tuned to the console theme instead of fought with.

---

## Known behaviour

This is a heavy site and it means to be. It targets desktop with a pointer and a GPU. If you're forking it for something that needs to load fast on a mid-range phone over 3G, take the structure and leave the particle field.

## Roadmap

- [ ] Honour `prefers-reduced-motion` across every animated surface
- [ ] Mobile: reduced particle count, simplified 3D
- [ ] Case-study panels with process, not just screenshots
- [ ] Lazy-load the three.js bundle below the fold

---

## Operator

**Joe Daniel** — B.Tech CSE (Blockchain, IoT & Cybersecurity), Woxsen University

Interested in the point where security, design, and things that actually ship overlap.

---

<sub>Fork it freely. If you build something louder, I'd like to see it.</sub>
