import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgressBanner } from './components/ProgressBanner';
import { RoadmapView } from './components/RoadmapView';
import { ResourcesDirectory } from './components/ResourcesDirectory';
import { ProjectsSection } from './components/ProjectsSection';
import { SocialsSection } from './components/SocialsSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { ContributeModal } from './components/ContributeModal';

import { roadmapData } from './data/roadmapData';
import { resourcesData } from './data/resourcesData';
import { projectsData } from './data/projectsData';
import { socialsData } from './data/socialsData';

export const App: React.FC = () => {
  // Preloader state
  const [loading, setLoading] = useState(true);

  // Contribute modal state
  const [isContributeOpen, setIsContributeOpen] = useState(false);

  // Local storage for completed roadmap topics
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('devs_p2p_completed_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage for bookmarked resources
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('devs_p2p_bookmarked_res');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('devs_p2p_completed_topics', JSON.stringify(completedTopics));
    } catch (e) {
      console.error('Failed to save completed topics', e);
    }
  }, [completedTopics]);

  useEffect(() => {
    try {
      localStorage.setItem('devs_p2p_bookmarked_res', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error('Failed to save bookmarked resources', e);
    }
  }, [bookmarkedIds]);

  // Total topics count across all 6 phases
  const totalTopics = roadmapData.reduce((acc, phase) => acc + phase.topics.length, 0);

  // Handlers
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
    if (window.confirm('Are you sure you want to reset your tracked learning progress?')) {
      setCompletedTopics([]);
    }
  };

  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResources = () => {
    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Custom Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Navigation */}
      <Navbar
        completedCount={completedTopics.length}
        totalTopics={totalTopics}
        onOpenContribute={() => setIsContributeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreRoadmap={scrollToRoadmap}
          onExploreResources={scrollToResources}
        />

        {/* Progress Tracker Banner */}
        <ProgressBanner
          completedCount={completedTopics.length}
          totalTopics={totalTopics}
          onResetProgress={handleResetProgress}
        />

        {/* Roadmap Milestones */}
        <RoadmapView
          phases={roadmapData}
          completedTopics={completedTopics}
          onToggleTopic={handleToggleTopic}
        />

        {/* Curated Resources Directory */}
        <ResourcesDirectory
          resources={resourcesData}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Capstone Projects Section */}
        <ProjectsSection projects={projectsData} />

        {/* Socials & Community */}
        <SocialsSection
          socials={socialsData}
          onOpenContribute={() => setIsContributeOpen(true)}
        />
      </main>

      {/* Contribute Modal */}
      <ContributeModal
        isOpen={isContributeOpen}
        onClose={() => setIsContributeOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
