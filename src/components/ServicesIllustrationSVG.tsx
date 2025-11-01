import React from "react";

const ServicesIllustrationSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 400"
    {...props}
  >
    {/* Background container */}
    <rect x="0" y="0" width="600" height="400" rx="20" ry="20" fill="#EFF6FF" />

    {/* Roads and arrows */}
    <path d="M100 350 L500 50" stroke="#1E3A8A" strokeWidth="5" strokeDasharray="10 8" />
    <polygon points="490,60 505,45 500,65" fill="#1E3A8A" />

    {/* Truck */}
    <rect x="150" y="220" width="180" height="80" rx="10" fill="#F97316" />
    <rect x="320" y="230" width="60" height="70" rx="10" fill="#1E3A8A" />
    <circle cx="180" cy="310" r="14" fill="#1E3A8A" />
    <circle cx="340" cy="310" r="14" fill="#1E3A8A" />

    {/* Cargo Boxes */}
    <rect x="420" y="140" width="60" height="50" fill="#F97316" opacity="0.8" />
    <rect x="450" y="100" width="60" height="50" fill="#1E3A8A" opacity="0.8" />

    {/* Airplane */}
    <polygon points="400,80 480,100 410,110" fill="#F97316" />
    <rect x="390" y="85" width="30" height="6" fill="#1E3A8A" />

    {/* Ship */}
    <rect x="220" y="320" width="100" height="25" rx="4" fill="#1E3A8A" />
    <rect x="230" y="305" width="80" height="15" rx="3" fill="#F97316" />
    <circle cx="260" cy="330" r="3" fill="white" />
    <circle cx="280" cy="330" r="3" fill="white" />
    <circle cx="300" cy="330" r="3" fill="white" />
  </svg>
);

export default ServicesIllustrationSVG;
