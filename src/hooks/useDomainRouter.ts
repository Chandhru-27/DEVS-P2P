import { useState, useEffect, useCallback } from 'react';
import type { DomainConfig } from '../types';
import {
  domainsRegistry,
  defaultDomainSlug,
  getDomainBySlug,
  isValidDomainSlug,
} from '../data/domains';

function parseSlugFromLocation(): string {
  if (typeof window === 'undefined') return defaultDomainSlug;

  // 1. Try parsing from hash (e.g. #/frontend, #frontend)
  const hash = window.location.hash.replace(/^#\/?/, '').split('/')[0]?.toLowerCase().trim();
  if (hash && isValidDomainSlug(hash)) {
    return hash;
  }

  // 2. Try parsing from pathname (e.g. /frontend, /aiml)
  const pathname = window.location.pathname.replace(/^\//, '').split('/')[0]?.toLowerCase().trim();
  if (pathname && isValidDomainSlug(pathname)) {
    return pathname;
  }

  return defaultDomainSlug;
}

export function useDomainRouter() {
  const [currentSlug, setCurrentSlug] = useState<string>(() => parseSlugFromLocation());

  const currentDomain: DomainConfig = getDomainBySlug(currentSlug);

  // Sync document title with current domain
  useEffect(() => {
    document.title = `DEVs P2P · ${currentDomain.name} | Complete Roadmap & Mentors`;
  }, [currentDomain]);

  // Navigate to a specific domain slug
  const setDomain = useCallback((newSlug: string) => {
    const slug = newSlug.toLowerCase().trim();
    if (!isValidDomainSlug(slug)) return;

    setCurrentSlug(slug);

    if (typeof window !== 'undefined') {
      try {
        const targetPath = `/${slug}`;
        if (window.location.pathname !== targetPath) {
          window.history.pushState({ domain: slug }, '', targetPath);
        }
      } catch (e) {
        // Fallback to hash if pushState fails in certain restricted iframe environments
        window.location.hash = `#/${slug}`;
      }
    }
  }, []);

  // Listen to popstate and hashchange events for browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      const detectedSlug = parseSlugFromLocation();
      if (detectedSlug !== currentSlug) {
        setCurrentSlug(detectedSlug);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [currentSlug]);

  return {
    currentDomain,
    currentSlug,
    setDomain,
    domains: domainsRegistry,
  };
}
