import type { DomainConfig } from '../../types';
import { aimlDomain } from './aiml';
import { frontendDomain } from './frontend';
import { backendDomain } from './backend';
import { cloudDevopsDomain } from './cloudDevops';
import { iotDomain } from './iot';
import { videoEditingDomain } from './videoEditing';

// The 6 active tracks across the platform
export const domainsRegistry: DomainConfig[] = [
  aimlDomain,
  frontendDomain,
  backendDomain,
  cloudDevopsDomain,
  iotDomain,
  videoEditingDomain,
];

// Mapping including friendly aliases (e.g. /cloud and /video)
export const domainsMap: Record<string, DomainConfig> = {
  aiml: aimlDomain,
  ai: aimlDomain,
  ml: aimlDomain,
  frontend: frontendDomain,
  backend: backendDomain,
  cloud: cloudDevopsDomain,
  'cloud-devops': cloudDevopsDomain,
  devops: cloudDevopsDomain,
  iot: iotDomain,
  'video-editing': videoEditingDomain,
  video: videoEditingDomain,
  editing: videoEditingDomain,
  videoediting: videoEditingDomain,
  media: videoEditingDomain, // Backward-compatibility alias
};

export const defaultDomainSlug = 'aiml';

export function getDomainBySlug(slug?: string | null): DomainConfig {
  if (!slug) return aimlDomain;
  const cleanSlug = slug.toLowerCase().trim();
  return domainsMap[cleanSlug] || aimlDomain;
}

export function isValidDomainSlug(slug?: string | null): boolean {
  if (!slug) return false;
  return Boolean(domainsMap[slug.toLowerCase().trim()]);
}

export {
  aimlDomain,
  frontendDomain,
  backendDomain,
  cloudDevopsDomain,
  iotDomain,
  videoEditingDomain,
};
