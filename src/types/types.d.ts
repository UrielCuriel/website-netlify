interface Author {
  sys: Sys
  name: string
  resume: string
  socialMedia: SocialMedia[]
  profilePic: ProfilePic
  bio: string
  email: string
  phone: string
  jobsCollection: JobsCollection
  educationCollection: EducationCollection
}

interface JobsCollection {
  items: Job[]
}

interface Job {
  sys: Sys
  name: string
  title: string
  start: string
  end: string
  description: string
  skillsCollection: SkillsCollection
  projectsCollection: ProjectsCollection
}

interface ProjectsCollection {
  items: Project[]
}

interface Project {
  sys: Sys
  title: string
  description: string
  challenges: string
  contribution: string
  outcome: string
  comments: string
  date: string
  url?: string
  skillsCollection: SkillsCollection
}

interface SkillsCollection {
  items: Skill[]
}

interface Skill {
  sys: Sys
  name: string
}

interface ProfilePic {
  title: string
  url: string
}

interface SocialMedia {
  href: string
  name: string
  value: string
}

interface Sys {
  id: string
}
interface EducationCollection {
  items: Edicacion[]
}

interface Edicacion {
  sys: Sys
  name: string
  dateStart: string
  dateEnd?: string
  title: string
  institute: string
  description: string
}
interface SkillCollection {
  items: Skill[]
}

interface Skill {
  sys: Sys
  name: string
  type: string
  years?: number
}
