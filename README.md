# Joe Daniel — Portfolio v2

Revamped portfolio in a **"tactile tech console"** theme — skeuomorphic hardware surfaces (brushed metal, mechanical keys, LEDs, CRT screens) layered with maximalist motion (cursor-linked particle field, marquees, glows, sparks).

Built with **React + Vite**.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Structure

- `src/components/reactbits/` — integrated [React Bits](https://reactbits.dev) components (OptionWheel, BorderGlow, ClickSpark, RotatingText, ScrollVelocity, LogoLoop, TargetCursor)
- `src/components/` — custom pieces (CursorField background, NavDial, Navbar, ScrollProgress)
- `src/sections/` — page sections (Hero, About, TechStack, Projects, Experience, Contact)
- `src/data/content.js` — **all portfolio content in one place** (edit projects, roles, links here)
- `src/styles/` — design system (`index.css`) + section styles (`sections.css`)
- `legacy/` — the original static site, preserved untouched
