export interface ServiceCard {
  id: string;
  title: string;
  description: string;
}

export const whatIDo: ServiceCard[] = [
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Building scalable REST APIs and backend systems using ASP.NET Core.',
  },
  {
    id: 'api-development',
    title: 'API Development',
    description:
      'Designing secure and maintainable APIs with authentication, authorization, validation, and proper architecture.',
  },
  {
    id: 'database-performance',
    title: 'Database & Performance',
    description: 'Designing relational databases, optimizing queries, and implementing caching using Redis.',
  },
  {
    id: 'system-architecture',
    title: 'System Architecture',
    description:
      'Applying SOLID principles, Clean Architecture, Repository Pattern, Unit of Work, and Separation of Concerns.',
  },
];
