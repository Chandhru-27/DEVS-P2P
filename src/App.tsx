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

import { eventHostsData } from './data/hostsData';
import { roadmapData } from './data/roadmapData';
import { resourcesData } from './data/resourcesData';
import { projectsData } from './data/projectsData';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedHostId, setSelectedHostId] = useState<string>(eventHostsData[0]?.id || '');
  const [isContributeOpen, setIsContributeOpen] = useState(false);

  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('devs_p2p_completed_topics');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('devs_p2p_bookmarked_res');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

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

  useEffect(() => {
    try { localStorage.setItem('devs_p2p_completed_topics', JSON.stringify(completedTopics)); }
    catch (e) { console.error('Failed to save completed topics', e); }
  }, [completedTopics]);

  useEffect(() => {
    try { localStorage.setItem('devs_p2p_bookmarked_res', JSON.stringify(bookmarkedIds)); }
    catch (e) { console.error('Failed to save bookmarked resources', e); }
  }, [bookmarkedIds]);

  const totalTopics = roadmapData.reduce((acc, phase) => acc + phase.topics.length, 0);

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
    if (window.confirm('Reset your progress?')) setCompletedTopics([]);
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
        onOpenContribute={() => setIsContributeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero — value prop */}
        <Hero onExploreRoadmap={scrollToRoadmap} />

        {/* 2. Roadmap — the core product, comes first */}
        <RoadmapView
          phases={roadmapData}
          completedTopics={completedTopics}
          onToggleTopic={handleToggleTopic}
          onResetProgress={handleResetProgress}
        />

        {/* 3. Hosts — who teaches it */}
        <EventHostsSection
          hosts={eventHostsData}
          selectedHostId={selectedHostId}
          onSelectHost={(id) => setSelectedHostId(id)}
        />

        {/* 4. Resources — what to study */}
        <ResourcesDirectory
          resources={resourcesData}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* 5. Projects — what to build */}
        <ProjectsSection projects={projectsData} />
      </main>

      <Footer />

      <ContributeModal isOpen={isContributeOpen} onClose={() => setIsContributeOpen(false)} />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectHost={(id) => {
          setSelectedHostId(id);
          document.getElementById('hosts')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default App;
