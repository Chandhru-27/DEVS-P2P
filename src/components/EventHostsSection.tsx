import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { EventHost } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Globe,
  ExternalLink,
  Check,
  Copy,
  RotateCw,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { AnimateIn } from './AnimateIn';

interface EventHostsSectionProps {
  hosts: EventHost[];
  selectedHostId?: string;
  onSelectHost?: (hostId: string) => void;
}

export const EventHostsSection: React.FC<EventHostsSectionProps> = ({
  hosts,
  selectedHostId: externalSelectedHostId,
  onSelectHost: externalOnSelectHost,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoRotateTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const numHosts = hosts.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync external selectedHostId if provided
  useEffect(() => {
    if (externalSelectedHostId) {
      const idx = hosts.findIndex((h) => h.id === externalSelectedHostId);
      if (idx !== -1 && idx !== activeIndex) {
        setActiveIndex(idx);
      }
    }
  }, [externalSelectedHostId, hosts, activeIndex]);

  const selectHostIndex = useCallback(
    (newIndex: number) => {
      if (numHosts <= 0) return;
      const normalizedIndex = (newIndex + numHosts) % numHosts;
      setActiveIndex(normalizedIndex);
      const selected = hosts[normalizedIndex];
      if (selected && externalOnSelectHost) {
        externalOnSelectHost(selected.id);
      }
    },
    [hosts, numHosts, externalOnSelectHost]
  );

  const rotateNext = useCallback(() => {
    if (numHosts > 1) {
      selectHostIndex(activeIndex + 1);
    }
  }, [activeIndex, selectHostIndex, numHosts]);

  const rotatePrev = useCallback(() => {
    if (numHosts > 1) {
      selectHostIndex(activeIndex - 1);
    }
  }, [activeIndex, selectHostIndex, numHosts]);

  // Auto-rotation effect
  useEffect(() => {
    if (isAutoRotating && numHosts > 1) {
      autoRotateTimerRef.current = setInterval(() => {
        rotateNext();
      }, 4000);
    } else if (autoRotateTimerRef.current) {
      clearInterval(autoRotateTimerRef.current);
    }

    return () => {
      if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
    };
  }, [isAutoRotating, rotateNext, numHosts]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1800);
  };

  // Drag / swipe handlers for rotatory cylinder
  const handleTouchStart = (e: React.TouchEvent) => {
    if (numHosts <= 1) return;
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null || numHosts <= 1) return;
    const diff = e.touches[0].clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (numHosts > 1) {
      if (dragOffset > 40) {
        rotatePrev();
      } else if (dragOffset < -40) {
        rotateNext();
      }
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (numHosts <= 1) return;
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX === null || numHosts <= 1) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (numHosts > 1) {
      if (dragOffset > 40) {
        rotatePrev();
      } else if (dragOffset < -40) {
        rotateNext();
      }
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  // Responsive cylinder radius for 3D rotation
  const cylinderRadius = isMobile
    ? numHosts <= 2
      ? 110
      : 160
    : numHosts <= 2
    ? 240
    : 380;

  return (
    <section id="hosts" className="relative py-14 sm:py-20 md:py-28 overflow-hidden bg-[#000000] border-t border-white/[0.06]">
      {/* Background Subtle Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateIn>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Event Mentors & Hosts</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
              Connect with the Team
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono px-2">
              {numHosts > 1
                ? 'Rotate through the event hosts to access direct socials, personal sites, and session materials.'
                : 'Direct socials, personal links, and session materials for your track mentor.'}
            </p>
          </div>
        </AnimateIn>

        {/* Rotatory Linktree 3D Carousel Stage */}
        <div
          className="relative w-full py-4 sm:py-8 select-none"
          style={{ perspective: isMobile ? '850px' : '1200px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            setDragStartX(null);
            setDragOffset(0);
          }}
        >
          {/* 3D Rotating Ring */}
          <div className="relative h-[510px] sm:h-[580px] w-full flex items-center justify-center">
            {hosts.map((host, idx) => {
              // Calculate angular position on cylinder
              let offset = (idx - activeIndex) % numHosts;
              if (offset > numHosts / 2) offset -= numHosts;
              if (offset < -numHosts / 2) offset += numHosts;

              const angleStep = 360 / numHosts;
              const angle = numHosts > 1 ? offset * angleStep : 0;
              const isCenter = offset === 0;

              return (
                <div
                  key={host.id}
                  onClick={() => selectHostIndex(idx)}
                  className={`absolute w-[285px] sm:w-[360px] transition-all duration-500 ease-out cursor-pointer ${
                    isCenter ? 'z-30 pointer-events-auto' : 'z-10 opacity-30 hover:opacity-70 pointer-events-auto'
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${cylinderRadius}px) scale(${isCenter ? 1 : 0.82})`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Linktree Card Container */}
                  <div
                    className={`rounded-3xl border p-5 sm:p-7 backdrop-blur-2xl transition-all duration-300 ${
                      isCenter
                        ? 'bg-zinc-950/95 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)]'
                        : 'bg-zinc-950/70 border-white/10 shadow-xl'
                    }`}
                  >
                    {/* Host Avatar & Header */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 p-1 mb-3 sm:mb-4 shadow-lg">
                        <img
                          src={host.avatarUrl}
                          alt={host.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg sm:text-xl text-zinc-500 bg-zinc-900 -z-10">
                          {host.initials}
                        </div>
                        {/* Live active dot */}
                        {isCenter && (
                          <div className="absolute bottom-1 right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-emerald-400 border-2 border-black" />
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{host.name}</h3>
                      <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] sm:text-xs font-mono text-zinc-300">
                        {host.role}
                      </div>

                      <p className="text-xs text-zinc-400 mt-2 font-medium line-clamp-1">{host.headline}</p>
                    </div>

                    {/* Linktree Stacked Action Buttons */}
                    <div className="mt-5 sm:mt-6 space-y-2">
                      {host.socials.github && (
                        <a
                          href={host.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-between w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <GithubIcon className="w-4 h-4 text-white" />
                            <span>GitHub Profile</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        </a>
                      )}

                      {host.socials.linkedin && (
                        <a
                          href={host.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-between w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <LinkedinIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                            <span>LinkedIn Network</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        </a>
                      )}

                      {host.socials.instagram && (
                        <a
                          href={host.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-between w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <InstagramIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                            <span>Instagram</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            <span className="font-mono text-[10px] sm:text-[11px]">@{host.socials.instagram.replace(/\/$/, '').split('/').pop()}</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </a>
                      )}

                      {host.socials.portfolio && (
                        <a
                          href={host.socials.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-between w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <Globe className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                            <span>Portfolio</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        </a>
                      )}

                      {host.socials.email && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(host.socials.email!);
                          }}
                          className="flex items-center justify-between w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Mail className="w-4 h-4 text-zinc-300 group-hover:text-white shrink-0" />
                            <span className="truncate">{host.socials.email}</span>
                          </div>
                          {copiedText === host.socials.email ? (
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono shrink-0">
                              <Check className="w-3 h-3" />
                              <span>Copied</span>
                            </span>
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Bio / Focus Footnote */}
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.06] text-center">
                      <p className="text-[11px] text-zinc-400 leading-relaxed italic line-clamp-2">
                        "{host.bio}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Rotation Arrow Controls (only if numHosts > 1) */}
          {numHosts > 1 && (
            <>
              <div className="absolute inset-y-0 left-1 sm:left-6 flex items-center z-40 pointer-events-none">
                <button
                  onClick={rotatePrev}
                  className="p-2 sm:p-3 rounded-full bg-zinc-950/85 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white shadow-xl pointer-events-auto transition-all active:scale-95 cursor-pointer backdrop-blur-md"
                  title="Previous Host (Rotate Left)"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-1 sm:right-6 flex items-center z-40 pointer-events-none">
                <button
                  onClick={rotateNext}
                  className="p-2 sm:p-3 rounded-full bg-zinc-950/85 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white shadow-xl pointer-events-auto transition-all active:scale-95 cursor-pointer backdrop-blur-md"
                  title="Next Host (Rotate Right)"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Rotary Selector Dial & Controls (only if numHosts > 1) */}
        {numHosts > 1 && (
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4">
            {/* Quick Host Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-xl max-w-full">
              {hosts.map((host, idx) => (
                <button
                  key={host.id}
                  onClick={() => selectHostIndex(idx)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>0{idx + 1}</span>
                  <span className="truncate max-w-[120px] sm:max-w-none">{host.name}</span>
                </button>
              ))}
            </div>

            {/* Auto-rotate Toggle */}
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  isAutoRotating
                    ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                    : 'border-white/10 text-zinc-400 hover:text-white bg-white/[0.02]'
                }`}
              >
                <RotateCw className={`w-3 h-3 ${isAutoRotating ? 'animate-spin' : ''}`} />
                <span>{isAutoRotating ? 'Auto ON' : 'Auto OFF'}</span>
              </button>

              <span>•</span>
              <span className="text-[11px] text-zinc-500">Drag or swipe to rotate</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
