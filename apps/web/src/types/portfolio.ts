export type ThemeVariant = 'minimal' | 'cybernetic' | 'glass' | 'editorial';

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  role: string;
  summary: string;
  challenge: string;
  outcome: string;
  metrics: Metric[];
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  summary: string;
  achievements: Metric[];
  responsibilities: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  grade?: string;
  location?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  credentialId?: string;
}

export interface SkillTool {
  name: string;
  level: number;
}

export interface SkillArea {
  id: string;
  label: string;
  years: number;
  summary: string;
  tools: SkillTool[];
}

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface Faq {
  question: string;
  answer: string;
}
