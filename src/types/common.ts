// Common TypeScript interfaces and types used across the application

export interface MetaData {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url?: string;
  format?: string;
  type: 'external' | 'internal';
  category: string;
  tags?: string[];
  date?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    researchGate?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  startDate: string;
  endDate?: string;
  budget?: string;
  partners?: string[];
  objectives?: string[];
  outcomes?: string[];
}

export interface News {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags?: string[];
}
