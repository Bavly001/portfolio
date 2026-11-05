export interface ExperienceHighlight {
  title: string
  description: string
}

export interface Experience {
  id: string
  role: string
  company: string
  companyTagline?: string
  period: string
  location: string
  workType: string
  highlights: ExperienceHighlight[]
  skills: string[]
}

export interface ArchitectureStep {
  step: string
  title: string
  desc: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  category: 'AI Platform' | 'Healthtech & Clinic' | 'Fintech & E-Commerce' | 'Gaming & Esports' | 'Enterprise Portal' | 'Full-Stack Platform' | string
  badgeText?: string
  description: string
  longDescription?: string
  features: string[]
  technologies: string[]
  metrics?: string
  githubUrl?: string
  githubBackendUrl?: string
  liveUrl?: string
  featured: boolean
  architectureFlow?: ArchitectureStep[]
  pipelineTitle?: string
  pipelineSubtitle?: string
}

export interface SkillItem {
  name: string
  category: string
  highlight?: boolean
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  gpa: string
  honors: string
  graduationProject: {
    name: string
    role: string
    description: string
    technologies: string[]
  }
}

export interface Certification {
  title: string
  issuer: string
  date: string
  url: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  availability: string
  stats: {
    label: string
    value: string
    subtext: string
  }[]
}
