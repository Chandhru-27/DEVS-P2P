export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export type ResourceType = 'Course' | 'Book' | 'GitHub' | 'Video' | 'Documentation' | 'Interactive' | 'Paper';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: ResourceType;
  level: Level;
  cost: 'Free' | 'Freemium' | 'Paid';
  authorOrProvider: string;
  tags: string[];
  featured?: boolean;
}

export interface RoadmapTopic {
  id: string;
  name: string;
  summary: string;
  keySkills: string[];
  recommendedResources: {
    title: string;
    url: string;
    type: string;
  }[];
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number;
  title: string;
  tagline: string;
  duration: string;
  difficulty: Level;
  color: string;
  badgeColor: string;
  iconName: string;
  overview: string;
  topics: RoadmapTopic[];
  milestoneProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
}

export interface ProjectIdea {
  id: string;
  title: string;
  phase: string;
  difficulty: Level;
  description: string;
  techStack: string[];
  datasetUrl?: string;
  datasetName?: string;
  learningOutcomes: string[];
}

export interface SocialLink {
  name: string;
  platform: 'github' | 'discord' | 'linkedin' | 'x' | 'youtube' | 'telegram' | 'email';
  url: string;
  handle: string;
  description: string;
  primaryColor: string;
  badge?: string;
}

export interface HostSocials {
  github?: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  email?: string;
  portfolio?: string;
}

export interface EventHost {
  id: string;
  name: string;
  role: string;
  headline: string;
  topicOrFocus: string;
  bio: string;
  avatarUrl: string;
  initials: string;
  socials: HostSocials;
}

export interface DomainConfig {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  iconName: string;
  heroHeadline: string;
  heroTagline: string;
  heroCtaText: string;
  roadmapData: RoadmapPhase[];
  hostsData: EventHost[];
  resourcesData: Resource[];
  projectsData: ProjectIdea[];
}
