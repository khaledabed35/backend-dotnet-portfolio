// ─────────────────────────────────────────────────────────────────────────
// EXPERIENCE.TS — Add or remove professional and educational experiences.
// ─────────────────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
}

export const timeline: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: '.NET Development Course',
    company: 'INSTANT (Paid Training)',
    period: '2026',
    description: 'Completed an intensive professional training course focusing on advanced .NET development and practical backend applications.',
    type: 'work',
  },
  {
    id: 'exp-2',
    role: '.NET Development Training',
    company: 'Information Technology Institute (ITI)',
    period: '2026',
    description: 'Completed an intensive development training program focused on modern backend architecture, C#, and ASP.NET Core.',
    type: 'work',
  },
  {
    id: 'exp-3',
    role: 'Information Technology Student',
    company: 'Damietta University — Faculty of Computers and Artificial Intelligence',
    period: '2023 — Present',
    description: 'Studying core computer science concepts, software engineering principles, and advanced database systems.',
    type: 'education',
  },
];