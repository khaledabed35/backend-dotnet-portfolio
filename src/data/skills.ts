// ─────────────────────────────────────────────────────────────────────────
// SKILLS.TS — Add, remove, or reorder items freely. Categories render in
// the order they appear here.
// ─────────────────────────────────────────────────────────────────────────

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Core languages and frameworks for building server-side applications.',
    items: ['C#', 'ASP.NET Core', 'Web API', 'MVC', 'Entity Framework Core', 'LINQ', 'REST APIs'],
  },
  {
    id: 'architecture',
    title: 'Architecture & Design',
    description: 'Principles and patterns applied to keep systems maintainable.',
    items: [
      'Clean Architecture',
      'SOLID',
      'Repository Pattern',
      'Unit of Work',
      'Specification Pattern',
      'Dependency Injection',
      'Separation of Concerns',
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Data modeling, querying, and persistence.',
    items: ['SQL Server', 'MySQL', 'Entity Framework Core'],
  },
  {
    id: 'security',
    title: 'Authentication & Security',
    description: 'Identity, access control, and safe handling of user data.',
    items: ['JWT', 'ASP.NET Core Identity', 'Authorization', 'Authentication', 'Password Hashing'],
  },
  {
    id: 'realtime',
    title: 'Caching & Real-Time',
    description: 'Performance and live communication between client and server.',
    items: ['Redis', 'SignalR'],
  },
  {
    id: 'integrations',
    title: 'Payments & Integrations',
    description: 'Connecting applications to third-party services.',
    items: ['Stripe', 'REST API Integrations', 'Email Services','Paymob'],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Day-to-day tooling for building and shipping software.',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Visual Studio', 'VS Code'],
  },
];
