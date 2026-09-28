import type { DomainConfig } from '../../types';
import { roadmapData } from '../roadmapData';
import { eventHostsData } from '../hostsData';
import { resourcesData } from '../resourcesData';
import { projectsData } from '../projectsData';

export const aimlDomain: DomainConfig = {
  id: 'aiml',
  slug: 'aiml',
  name: 'AI & Machine Learning',
  shortName: 'AI/ML',
  badge: 'Core Track',
  iconName: 'Cpu',
  heroHeadline: 'When intelligence reaches out to instinct, the future takes shape',
  heroTagline: 'an unlikely alliance · where human intuition and algorithmic precision move as one',
  heroCtaText: 'Explore AI/ML Roadmap',
  roadmapData,
  hostsData: eventHostsData,
  resourcesData,
  projectsData,
};
