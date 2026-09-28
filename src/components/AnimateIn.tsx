import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isInView
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-8 blur-[2px]'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
