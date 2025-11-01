// src/components/FAQIllustrationSVG.tsx
import React from "react";

const FAQIllustrationSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 400"
    {...props}
  >
    {/* Background */}
    <rect width="600" height="400" rx="20" fill="#FEF3C7" /> {/* yellow-50 */}

    {/* Decorative Circles */}
    <circle cx="520" cy="80" r="50" fill="#DBEAFE" opacity="0.5" />
    <circle cx="100" cy="320" r="70" fill="#FDE68A" opacity="0.4" />

    {/* Speech Bubbles */}
    <rect x="140" y="80" width="180" height="80" rx="15" fill="#3B82F6" />
    <path d="M230 160 L240 190 L210 170 Z" fill="#3B82F6" />
    <text
      x="150"
      y="120"
      fill="white"
      fontSize="14"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      How do I track my shipment?
    </text>

    <rect x="300" y="190" width="200" height="80" rx="15" fill="#F97316" />
    <path d="M380 270 L390 300 L360 280 Z" fill="#F97316" />
    <text
      x="310"
      y="230"
      fill="white"
      fontSize="14"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      Use our online tracking tool.
    </text>

    {/* Characters (abstract people icons) */}
    <circle cx="180" cy="300" r="35" fill="#3B82F6" /> {/* person 1 head */}
    <rect x="150" y="330" width="60" height="25" rx="10" fill="#1E3A8A" /> {/* body */}

    <circle cx="420" cy="320" r="35" fill="#F97316" /> {/* person 2 head */}
    <rect x="390" y="350" width="60" height="25" rx="10" fill="#C2410C" /> {/* body */}

    {/* Connection Line */}
    <line
      x1="215"
      y1="300"
      x2="385"
      y2="320"
      stroke="#1E3A8A"
      strokeWidth="3"
      strokeDasharray="6 6"
      opacity="0.6"
    />

    {/* Dots for Design Balance */}
    <circle cx="520" cy="340" r="8" fill="#3B82F6" opacity="0.5" />
    <circle cx="80" cy="100" r="6" fill="#F97316" opacity="0.7" />
    <circle cx="500" cy="200" r="5" fill="#1E3A8A" opacity="0.7" />
  </svg>
);

export default FAQIllustrationSVG;