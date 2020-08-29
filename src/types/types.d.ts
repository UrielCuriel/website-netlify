export interface Author {
  sys: Sys
  name: string
  resume: string
  socialMedia: SocialMedia[]
  profilePic: File
  bio: string
  email: string
  phone: string
  jobsCollection: JobsCollection
  educationCollection: EducationCollection
}

export interface JobsCollection {
  items: Job[]
}

export interface Job {
  sys: Sys
  name: string
  title: string
  start: string
  end: string
  description: string
  skillsCollection: SkillsCollection
  projectsCollection: ProjectsCollection
}

export interface ProjectsCollection {
  items: Project[]
}
export interface SkillsCollection {
  items: Skill[]
}

export interface Skill {
  sys: Sys
  name: string
}

export interface File {
  sys?: Sys
  title?: string
  url?: string
}

export interface SocialMedia {
  href: string
  name: string
  value: string
}

export interface Sys {
  id: string
}
export interface EducationCollection {
  items: Edicacion[]
}

export interface Edicacion {
  sys: Sys
  name: string
  dateStart: string
  dateEnd?: string
  title: string
  institute: string
  description: string
}
export interface SkillCollection {
  items: Skill[]
}

export interface Skill {
  sys: Sys
  name: string
  type: string
  years?: number
}

export interface ProjectCollection {
  items: Project[]
}

export interface Project {
  sys: Sys
  title: string
  url?: string
  date: string
  description?: string
  challenges?: string
  contribution?: string
  preview?: File
  skillsCollection: SkillsCollection
}

export interface SkillsCollection {
  items: Skill[]
}
