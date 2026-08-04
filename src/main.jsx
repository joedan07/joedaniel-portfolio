import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import './styles/sections.css';

// No StrictMode: its dev-only double-mount forces react-three-fiber to
// dispose and force-lose the WebGL context on the first mount, which spuriously
// triggers the Lanyard's context-lost fallback (and double-runs the physics
// world). Production behavior is identical either way.
createRoot(document.getElementById('root')).render(<App />);
