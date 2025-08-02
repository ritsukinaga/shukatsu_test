'use client';

import { useEffect, useState } from 'react';

interface ChillNapTextProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ChillNapText({ className = '', size = 'lg' }: ChillNapTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  };

  return (
    <div className={`relative ${className}`}>
      {/* SVGフィルター定義 */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="blur-effect">
            <feGaussianBlur stdDeviation="0.5" />
            <feOffset dx="0" dy="0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="distortion-effect">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" />
          </filter>
          <filter id="brush-stroke">
            <feGaussianBlur stdDeviation="1" />
            <feOffset dx="2" dy="2" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>
        </defs>
      </svg>

      {/* メインテキスト */}
      <div className="relative">
        <h1 
          className={`font-bold text-pink-500 outline-black outline-2 -outline-offset-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          } ${sizeClasses[size]}`}
          style={{
            filter: 'url(#brush-stroke)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            animation: 'brushStroke 3s ease-in-out infinite'
          }}
        >
          Chill & Nap.
        </h1>
      </div>

      {/* 掠れ効果のオーバーレイ */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          animation: 'sweep 2s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes brushStroke {
          0%, 100% {
            filter: url(#brush-stroke) blur(0.5px);
            transform: translateX(0px) translateY(0px);
          }
          25% {
            filter: url(#brush-stroke) blur(1px);
            transform: translateX(-1px) translateY(-1px);
          }
          50% {
            filter: url(#brush-stroke) blur(0.8px);
            transform: translateX(1px) translateY(1px);
          }
          75% {
            filter: url(#brush-stroke) blur(1.2px);
            transform: translateX(-0.5px) translateY(0.5px);
          }
        }

        @keyframes sweep {
          0%, 100% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.3;
            transform: translateX(100%);
          }
        }

        .text-pink-500 {
          background: linear-gradient(45deg, #ec4899, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
} 