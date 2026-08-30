
// ─────────────────────────────────────────────────────────────────────────
// PROJECTS.TS — Add or remove project objects freely; the grid re-flows
// automatically. Leave liveUrl empty ('') to hide the "Live Demo" button.
// ─────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'RideShere',
    description:
      'A real-time ride-sharing backend platform engineered to handle dynamic driver-passenger matching, geographic queries, and automated financial transactions.',
    image: '/projects/project-1.png',
    technologies: ['C#', 'ASP.NET Core', 'NetTopologySuite', 'Redis', 'SignalR', 'Paymob'],
    features: [
      'Real-time communication and dispatching via SignalR',
      'Advanced geospatial queries and tracking using NetTopologySuite',
      'Automated payment workflows integrated with Paymob',
    ],
    githubUrl: 'https://github.com/khaledabed35/RideShere',
    liveUrl: '',
  },
  {
    id: 'project-2',
    name: 'TicketPluse',
    description:
      'A robust ticketing and seating management backend system designed to handle high-concurrency event bookings with secure payment processing.',
    image: '/projects/project-2.png',
    technologies: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Redis', 'JWT', 'Stripe'],
    features: [
      'Repository Pattern & Unit of Work architecture',
      'Redis caching for high-read endpoints and seat locking',
      'Secure payment processing integrated with Stripe',
    ],
    githubUrl: 'https://github.com/khaledabed35/TicketPluse',
    liveUrl: '',
  },
  {
    id: 'project-3',
    name: 'EduManage',
    description:
      'A comprehensive college management backend system structuring academic operations, departments, courses, and student enrollments.',
    image: '/projects/project-3.png',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server'],
    features: [
      'Complete CRUD operations for academic entities (Students, Doctors, Courses)',
      'Relational database design with optimized EF Core navigation properties',
      'Structured academic department and enrollment management',
    ],
    githubUrl: 'https://github.com/khaledabed35/edu-management',
    liveUrl: '',
  },
  {
    id: 'project-4',
    name: 'ERP-System',
    description:
      'An enterprise resource planning backend system designed to streamline core business operations, manage company resources, and handle complex data workflows.',
    image: '/projects/project-4.png',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server'],
    features: [
      'Modular architecture for managing core enterprise workflows',
      'Secure role-based access control and user authorization',
      'Optimized relational database schema for resource and inventory tracking',
    ],
    githubUrl: 'https://github.com/khaledabed35/ERP-System',
    liveUrl: '',
  },
];

// ─────────────────────────────────────────────────────────────────────────
// FEATURED PROJECT — Your flagship project, shown in its own large section.
// ─────────────────────────────────────────────────────────────────────────

export interface FeaturedProject {
  name: string;
  description: string;
  architecture: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const featuredProject: FeaturedProject = {
  name: 'RideShere',
  description:
    'A real-time ride-sharing backend platform engineered to handle dynamic driver-passenger matching, geographic queries, and automated financial transactions. Built to deliver high performance and reliability under active transit conditions.',
  architecture:
    'Built with Clean Architecture, separating Domain, Application, Infrastructure, and API layers. Utilizes the Repository and Unit of Work patterns, incorporating NetTopologySuite for spatial calculations and geospatial data handling.',
  features: [
    'Real-time communication and dispatching via SignalR',
    'Advanced geospatial queries and tracking using NetTopologySuite',
    'In-memory caching and performance optimization using Redis',
    'Automated payment workflows integrated with Paymob',
    'Secure authentication and role management (JWT + ASP.NET Core Identity)',
  ],
  technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'NetTopologySuite', 'Redis', 'SignalR', 'Paymob'],
  githubUrl: 'https://github.com/khaledabed35/RideShere',
  liveUrl: '',
};