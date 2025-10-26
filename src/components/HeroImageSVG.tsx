// src/components/HeroImageSVG.tsx
import React from 'react';

const HeroImageSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 600"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    {/* Background - Light Yellow/Sandy */}
    <rect x="0" y="0" width="1000" height="600" fill="#FEF3C7" /> {/* yellow-50 */}

    {/* Dynamic Abstract Shapes (representing flow/movement) */}
    <path d="M0,0 Q250,50 500,0 T1000,0 L1000,600 Q750,550 500,600 T0,600 Z" fill="#E0F2FE" opacity="0.3" /> {/* Light blue wave */}
    <circle cx="900" cy="50" r="80" fill="#F97316" opacity="0.1" /> {/* orange-500 soft glow */}
    <circle cx="100" cy="550" r="60" fill="#1E3A8A" opacity="0.1" /> {/* blue-900 soft glow */}

    {/* Plane (simplified, taking off) - Blue accents */}
    <path d="M700,150 L850,120 L880,150 L850,170 Z" fill="#1E3A8A" /> {/* blue-900 main body */}
    <path d="M780,130 Q800,100 850,110 L880,150 L780,150 Z" fill="#D1EEFF" /> {/* Light blue wing */}
    <circle cx="790" cy="155" r="10" fill="#A0AEC0" /> {/* Window/Engine detail */}

    {/* Cargo Ship (simplified, on water) - Blue and Orange containers */}
    <rect x="150" y="400" width="400" height="100" fill="#1E3A8A" /> {/* blue-900 hull */}
    <rect x="180" y="350" width="80" height="50" fill="#F97316" /> {/* orange-500 container */}
    <rect x="270" y="350" width="80" height="50" fill="#FBBF24" /> {/* yellow container */}
    <rect x="360" y="350" width="80" height="50" fill="#3B82F6" /> {/* light blue container */}
    <rect x="180" y="300" width="80" height="50" fill="#3B82F6" /> {/* light blue container */}
    <rect x="270" y="300" width="80" height="50" fill="#F97316" /> {/* orange-500 container */}
    <path d="M150,500 L180,530 L520,530 L550,500 Z" fill="#F97316" opacity="0.7" /> {/* Water reflection/wake */}

    {/* Delivery Truck (simplified, driving) - Orange main, Blue details */}
    <rect x="600" y="450" width="250" height="100" fill="#F97316" rx="10" /> {/* orange-500 truck body */}
    <rect x="610" y="460" width="50" height="40" fill="#1E3A8A" rx="5" /> {/* blue-900 cab window */}
    <circle cx="650" cy="550" r="25" fill="#1E3A8A" /> {/* blue-900 wheel */}
    <circle cx="800" cy="550" r="25" fill="#1E3A8A" /> {/* blue-900 wheel */}

    {/* Global connection lines */}
    <line x1="850" y1="120" x2="400" y2="350" stroke="#1E3A8A" strokeWidth="3" strokeDasharray="10 10" opacity="0.5" />
    <line x1="500" y1="350" x2="650" y2="450" stroke="#F97316" strokeWidth="3" strokeDasharray="10 10" opacity="0.5" />
  </svg>
);

export default HeroImageSVG;