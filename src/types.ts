export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  date: string;
  badge?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  highlights?: string[];
  certificateUrl?: string;
  location?: string;
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  type: 'hackathon' | 'certification' | 'training';
  organization?: string;
  prize?: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'databases' | 'tools' | 'devops' | 'ai' | 'app';
  icon?: string;
  level?: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stats {
  count: number;
  label: string;
  suffix?: string;
  prefix?: string;
}
