export const SECTIONS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'stack', label: 'STACK' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'XP' },
  { id: 'contact', label: 'CONTACT' }
];

export const ROLES = [
  'FULL-STACK DEVELOPER',
  'SOFTWARE ENGINEER',
  'INFOSEC ENTHUSIAST',
  'BLOCKCHAIN BUILDER',
  'IOT TINKERER'
];

export const TAGLINE = 'Building secure, scalable, real-world technology solutions.';

export const LINKS = {
  github: 'https://github.com/joedan07',
  linkedin: 'https://www.linkedin.com/in/joe-daniel-527b0b36a/',
  email: 'joedaniel7260@gmail.com'
};

export const PROJECTS = [
  {
    unit: 'MODULE 01',
    title: 'ClassHub — SaaS Educational Platform',
    status: 'LIVE',
    description:
      'Evolved from a hackathon prototype into a fully functional, deployment-ready SaaS platform. Architected with a secure relational database, Role-Based Access Control (RBAC), and real-time synchronization for university-scale deployment.',
    tags: ['React + TypeScript', 'Supabase', 'RBAC Security', 'WebSockets'],
    link: 'https://class-hub-beta.vercel.app/',
    linkLabel: 'View Live Project'
  },
  {
    unit: 'MODULE 02',
    title: 'Password Generator & Chrome Extension',
    status: 'SHIPPED',
    description:
      'A secure password generator built with Python and extended into a published Chrome extension. Includes customizable generation options, strength validation, and user-focused UI design.',
    tags: ['Python', 'JavaScript', 'Chrome Extension API', 'HTML/CSS'],
    link: 'https://chromewebstore.google.com/detail/maegmkhebhpiholepepddohpfgjfkahc',
    linkLabel: 'View Extension'
  },
  {
    unit: 'MODULE 03',
    title: 'FraudLens — Digital Wallet Fraud Study',
    status: 'RESEARCH',
    description:
      'Co-authored "An Empirical Study of Digital Wallet Fraud Patterns and User Vulnerabilities in India" — analyzing UPI fraud, phishing, smishing and social engineering using primary surveys, NCRB & I4C datasets, and ML/NLP-based fraud detection, backed by field visits to cybersecurity firms.',
    tags: ['Cybersecurity Research', 'UPI / FinTech', 'Machine Learning', 'NLP'],
    link: 'https://www.linkedin.com/posts/joe-daniel-527b0b36a_cybersecurity-fintech-digitalfraud-activity-7460901796128010240-xBL9',
    linkLabel: 'View LinkedIn Post'
  },
  {
    unit: 'MODULE 04',
    title: 'Flutter + AppSheet Application',
    status: 'BUILT',
    description:
      'Developed a mobile application integrating Flutter with AppSheet to streamline structured data management and user interaction workflows.',
    tags: ['Flutter', 'Dart', 'AppSheet', 'Mobile Dev'],
    link: null,
    linkLabel: null
  }
];

export const EXPERIENCE = [
  {
    unit: 'U-01',
    title: 'Production Executive — Digital Office (FLUX)',
    body: 'Selected as Production Executive, collaborating with some of the most creative and talented individuals on campus. Deep exposure to high-level team management while executing large-scale digital productions.'
  },
  {
    unit: 'U-02',
    title: 'Tech Lead — School Student Council',
    body: 'Led technical initiatives and managed digital infrastructure. Successfully livestreamed an inter-school event for the first time and ensured smooth technical coordination.'
  },
  {
    unit: 'U-03',
    title: 'Digital Media & Instagram Management',
    body: "Managed the School Student Council's Instagram page, improving digital communication and engagement through structured content and consistent updates."
  },
  {
    unit: 'U-04',
    title: 'TEDx Event Videography Collaboration',
    body: 'Collaborated with peers on videography production for a TEDx event, contributing to technical execution and media coordination.'
  }
];

export const SKILLS_JSON = `{
  "languages":    ["JavaScript", "TypeScript", "Python", "SQL", "Dart"],
  "frontend":     ["React.js", "HTML5/CSS3", "Tailwind CSS"],
  "backend":      ["Node.js", "Supabase", "PostgreSQL RPCs"],
  "architecture": ["WebSockets", "Row Level Security", "REST APIs"],
  "domains":      ["Full-Stack Dev", "Cybersecurity", "Blockchain"],
  "tools":        ["Git/GitHub", "Vercel", "Figma"]
}`;
