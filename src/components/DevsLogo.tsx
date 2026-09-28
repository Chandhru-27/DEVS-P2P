import React from 'react';

interface DevsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const DevsLogo: React.FC<DevsLogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const sizes = {
    sm: { text: 'text-lg', stroke: 1.2, gap: 'tracking-[0.15em]' },
    md: { text: 'text-2xl', stroke: 1.5, gap: 'tracking-[0.15em]' },
    lg: { text: 'text-4xl', stroke: 2, gap: 'tracking-[0.18em]' },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col ${className}`}>
      <span
        className={`${s.text} font-black ${s.gap} select-none`}
        style={{
          WebkitTextStroke: `${s.stroke}px rgba(255,255,255,0.85)`,
          WebkitTextFillColor: 'transparent',
          paintOrder: 'stroke fill',
        }}
      >
        DEVS
      </span>
      {showTagline && (
        <span className="text-[9px] tracking-[0.35em] text-zinc-500 uppercase mt-0.5 font-medium">
          Code. Coffee. Repeat ...
        </span>
      )}
    </div>
  );
};
