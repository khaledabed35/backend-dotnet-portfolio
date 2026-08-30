// ─────────────────────────────────────────────────────────────────────────
// PROFILE.TS — This is the single place to put your personal information.
// Replace every [PLACEHOLDER] below. Nothing else in the codebase needs to
// change for basic personalization.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Khaled Abed Elmoghazy',
  title: 'Backend .NET Developer',

  // Short line shown directly under the hero title.
  tagline:
    'Backend-focused developer building scalable, secure, and maintainable web applications using modern .NET technologies.',

  // Longer, editable paragraph shown below the tagline in the hero.
  heroDescription:
    '[Add 2–3 sentences here about the kind of problems you like solving, ' +
    'the scale or domain you have worked in, and what you are looking for next. ' +
    'Keep it specific and avoid generic buzzwords.]',

  about: {
    intro: '[ABOUT_ME — a short personal introduction, 2–3 sentences.]',
    specialization:
      '[Describe what you specialize in — e.g. designing REST APIs, relational data models, or distributed systems.]',
    philosophy:
      '[Describe your development philosophy — e.g. how you think about maintainability, testing, or simplicity.]',
    systems:
      '[Describe the kind of systems you enjoy building — e.g. APIs, internal tools, payment systems, real-time apps.]',
    goal: '[Describe your career goal — the kind of role, team, or problems you want to work on next.]',
  },

  location: '[Damietta,, Egypt]',
  availability: 'Open to opportunities',

  links: {
    github: 'https://github.com/khaledabed35',
    linkedin: 'https://www.linkedin.com/in/khaled-abed-5a6b41343/',
    email: 'abedk9072@gmail.com',
    cvUrl: 'https://drive.google.com/file/d/1k8B29WjwhgDSCX8mIM63_fYgT7-k3TQR/view?usp=drive_link',
  },

  
  showExperience: true,
};

export type Profile = typeof profile;
