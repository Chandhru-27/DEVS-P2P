import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoadmapView } from './components/RoadmapView';
import { EventHostsSection } from './components/EventHostsSection';
import { ResourcesDirectory } from './components/ResourcesDirectory';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { ContributeModal } from './components/ContributeModal';
import { CommandPalette } from './components/CommandPalette';
import { useDomainRouter } from './hooks/useDomainRouter';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isContributeOpen, setIsContributeOpen] = useState(false);

  // Dynamic Domain Routing & State Engine
  const { currentDomain, currentSlug, setDomain, domains } = useDomainRouter();

  const [selectedHostId, setSelectedHostId] = useState<string>(
    currentDomain.hostsData[0]?.id || ''
  );

  // Synchronize selected host when domain switches
  useEffect(() => {
    setSelectedHostId(currentDomain.hostsData[0]?.id || '');
  }, [currentDomain]);

  // Per-domain progress persistence
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`devs_p2p_completed_${currentSlug}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`devs_p2p_completed_${currentSlug}`);
      setCompletedTopics(saved ? JSON.parse(saved) : []);
    } catch {
      setCompletedTopics([]);
    }
  }, [currentSlug]);

  useEffect(() => {
    try {
      localStorage.setItem(`devs_p2p_completed_${currentSlug}`, JSON.stringify(completedTopics));
    } catch (e) {
      console.error('Failed to save completed topics', e);
    }
  }, [completedTopics, currentSlug]);

  // Per-domain bookmark persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`devs_p2p_bookmarked_${currentSlug}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`devs_p2p_bookmarked_${currentSlug}`);
      setBookmarkedIds(saved ? JSON.parse(saved) : []);
    } catch {
      setBookmarkedIds([]);
    }
  }, [currentSlug]);

  useEffect(() => {
    try {
      localStorage.setItem(`devs_p2p_bookmarked_${currentSlug}`, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error('Failed to save bookmarked resources', e);
    }
  }, [bookmarkedIds, currentSlug]);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalTopics = currentDomain.roadmapData.reduce(
    (acc, phase) => acc + phase.topics.length,
    0
  );

  const handleToggleTopic = (topicId: string) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
    );
  };

  const handleToggleBookmark = (resourceId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(resourceId) ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]
    );
  };

  const handleResetProgress = () => {
    if (window.confirm(`Reset your ${currentDomain.shortName} progress?`)) {
      setCompletedTopics([]);
    }
  };

  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 flex flex-col font-sans selection:bg-white/10 selection:text-white">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar
        completedCount={completedTopics.length}
        totalTopics={totalTopics}
        currentSlug={currentSlug}
        currentDomain={currentDomain}
        domains={domains}
        onSelectDomain={setDomain}
        onOpenContribute={() => setIsContributeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero — Value prop & Domain Quick Switcher */}
        <Hero
          currentDomain={currentDomain}
          onExploreRoadmap={scrollToRoadmap}
        />

        {/* 2. Dynamic Roadmap — The core curriculum */}
        <RoadmapView
          key={`roadmap-${currentSlug}`}
          phases={currentDomain.roadmapData}
          completedTopics={completedTopics}
          onToggleTopic={handleToggleTopic}
          onResetProgress={handleResetProgress}
        />

        {/* 3. Dynamic 3D Rotatory Linktree Hosts — Domain Mentors */}
        <EventHostsSection
          key={`hosts-${currentSlug}`}
          hosts={currentDomain.hostsData}
          selectedHostId={selectedHostId}
          onSelectHost={(id) => setSelectedHostId(id)}
        />

        {/* 4. Curated Resources Directory */}
        <ResourcesDirectory
          key={`resources-${currentSlug}`}
          resources={currentDomain.resourcesData}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* 5. Proof-of-Work Projects */}
        <ProjectsSection
          key={`projects-${currentSlug}`}
          projects={currentDomain.projectsData}
        />
      </main>

      <Footer
        currentSlug={currentSlug}
        domains={domains}
        onSelectDomain={setDomain}
      />

      <ContributeModal
        isOpen={isContributeOpen}
        onClose={() => setIsContributeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        currentDomain={currentDomain}
        domains={domains}
        onSelectDomain={setDomain}
        onSelectHost={(id) => {
          setSelectedHostId(id);
          document.getElementById('hosts')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default App;
