// src/components/AboutImageSVG.tsx
import React from 'react';

const AboutImageSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 400"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    {/* Background - Light Yellow/Sandy */}
    <rect x="0" y="0" width="600" height="400" fill="#FEF3C7" rx="20" ry="20" /> {/* yellow-50 */}

    {/* Stylized World Map / Globe */}
    <circle cx="300" cy="200" r="150" fill="#E0F2FE" stroke="#3B82F6" strokeWidth="5" /> {/* Light blue globe base */}
    <path d="M250,150 C230,120 200,130 180,160 S170,220 200,250 S280,280 300,250 C330,220 350,180 320,150 Z" fill="#1E3A8A" opacity="0.7" /> {/* Dark blue continent shape 1 */}
    <path d="M400,200 C380,170 350,160 330,190 S320,250 350,280 S430,310 450,280 C480,250 500,210 470,180 Z" fill="#1E3A8A" opacity="0.6" /> {/* Dark blue continent shape 2 */}

    {/* Connection Dots and Lines (representing logistics routes) */}
    <circle cx="180" cy="160" r="8" fill="#F97316" /> {/* orange-500 start point */}
    <circle cx="450" cy="280" r="8" fill="#F97316" /> {/* orange-500 end point */}
    <line x1="180" y1="160" x2="450" y2="280" stroke="#F97316" strokeWidth="3" strokeDasharray="8 8" />

    <circle cx="300" cy="100" r="8" fill="#F97316" /> {/* another orange-500 point */}
    <circle cx="400" cy="350" r="8" fill="#1E3A8A" /> {/* blue-900 point */}
    <line x1="300" y1="100" x2="400" y2="350" stroke="#1E3A8A" strokeWidth="3" strokeDasharray="8 8" />

    {/* Abstract People / Partnership Icon */}
    <path d="M100,300 Q120,250 150,260 T200,300 V350 H100 Z" fill="#1E3A8A" opacity="0.8" /> {/* blue-900 figure 1 */}
    <path d="M180,290 Q200,240 230,250 T280,290 V340 H180 Z" fill="#F97316" opacity="0.8" /> {/* orange-500 figure 2 */}
  </svg>
);

export default AboutImageSVG;