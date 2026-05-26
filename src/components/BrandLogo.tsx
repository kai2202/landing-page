import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 48,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} id="brand-logo-component">
      {/* SVG Emblem */}
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className="shrink-0 drop-shadow-md select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dynamic cursive Google Font for perfect branding match */}
          <style dangerouslySetInnerHTML={{ __html: `
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@500;700&display=swap');
            .brand-script-text {
              font-family: 'Dancing Script', 'Brush Script MT', cursive;
              font-size: 80px;
              fill: #1A5F7A;
              text-anchor: middle;
              font-weight: bold;
              filter: drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.95)) drop-shadow(-2px -2px 4px rgba(255, 255, 255, 0.95));
            }
            .brand-sub-text {
              font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: 14px;
              fill: #7D6B58;
              text-anchor: middle;
              text-transform: uppercase;
              filter: drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.95)) drop-shadow(-1px -1px 2px rgba(255, 255, 255, 0.95));
            }
          ` }} />

          {/* Gradients */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF3E3" />
            <stop offset="40%" stopColor="#FFE4D3" />
            <stop offset="100%" stopColor="#FFF5E5" />
          </linearGradient>

          <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFAE42" />
            <stop offset="100%" stopColor="#FF7E29" />
          </linearGradient>

          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5CD0D4" />
            <stop offset="40%" stopColor="#1C8BA4" />
            <stop offset="100%" stopColor="#1A5F7A" />
          </linearGradient>

          <linearGradient id="sandGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F9F5EC" />
            <stop offset="50%" stopColor="#ECE3CD" />
            <stop offset="100%" stopColor="#DFD1AC" />
          </linearGradient>
          
          <radialGradient id="plumeriaGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD324" />
            <stop offset="40%" stopColor="#FFEA6C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Circular mask for center scene */}
          <clipPath id="circleClip">
            <circle cx="250" cy="250" r="225" />
          </clipPath>
        </defs>

        {/* Central Round Emblem Masked Area */}
        <g clipPath="url(#circleClip)">
          {/* Sky background */}
          <rect x="0" y="0" width="500" height="500" fill="url(#skyGrad)" />
          
          {/* Soft Sunset Clouds */}
          <path d="M -50 140 Q 60 110 180 130 T 420 120 Q 480 140 550 130 L 550 250 L -50 250 Z" fill="#FFFBF5" opacity="0.4" />
          
          {/* Flying Seagull */}
          <path d="M 190 85 Q 205 77 220 85 Q 210 90 205 88 Q 200 95 190 85" fill="#FAFAF6" />
          <path d="M 222 84 Q 230 78 238 84 Q 232 88 229 87 Q 226 92 222 84" fill="#FAFAF6" opacity="0.8" />

          {/* Golden Sun rising/setting */}
          <circle cx="310" cy="180" r="50" fill="url(#sunGrad)" />

          {/* Ocean/Sea */}
          <rect x="0" y="210" width="500" height="290" fill="url(#seaGrad)" />
          
          {/* Waves detailing (curved lines) */}
          <path d="M -10 230 C 130 215 280 240 510 220 L 510 260 L -10 260 Z" fill="#9AEBED" opacity="0.3" />
          <path d="M -10 270 C 120 280 260 250 510 275" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M -10 320 C 150 295 320 330 510 310" stroke="#E0FBFC" strokeWidth="3" fill="none" opacity="0.5" />

          {/* Small Vietnamese Fishing Boat */}
          <g transform="translate(230, 205) scale(0.7)">
            <path d="M 10 10 C 25 -2 55 -2 70 10 C 60 14 20 14 10 10 Z" fill="#0C4C64" />
            <path d="M 38 10 L 38 -15 Q 48 -18 55 -10 Z" fill="#FFF" opacity="0.9" />
            <line x1="38" y1="10" x2="38" y2="-17" stroke="#333" strokeWidth="1.5" />
          </g>
          
          {/* Sand Beach Shoreline (Sông cát lượn sóng) */}
          <path d="M -10 340 Q 150 330 270 380 T 510 335 L 510 510 L -10 510 Z" fill="url(#sandGrad)" />
          
          {/* Beach foam / wave outline */}
          <path d="M -10 340 Q 150 330 270 380 T 510 335" stroke="#FFFFFF" strokeWidth="5" fill="none" opacity="0.7" />
          <path d="M -10 345 Q 150 335 270 385 T 510 340" stroke="#EBF8FF" strokeWidth="2" fill="none" opacity="0.8" />

          {/* Shell & Starfish on sand */}
          {/* Scallop Shell */}
          <path d="M 180 435 C 175 425 195 423 190 435 Q 185 440 180 435" fill="#EADBC8" stroke="#D1BFA7" strokeWidth="1" />
          {/* Orange Starfish */}
          <path d="M 250 445 L 253 434 L 263 434 L 255 428 L 258 418 L 250 424 L 242 418 L 245 428 L 237 434 L 247 434 Z" fill="#E07A5F" stroke="#C55F43" strokeWidth="1.5" />
        </g>

        {/* Circular Outer Outline Rim */}
        <circle cx="250" cy="250" r="226" stroke="#D3C9B6" strokeWidth="4" fill="none" opacity="0.8" />

        {/* Left Palm Leaves Garland */}
        <g id="left-leaves" opacity="0.95">
          <path d="M 40 330 Q -10 240 50 140 Q 90 200 40 330" fill="#2E7D32" opacity="0.25" />
          {/* Leaf spine */}
          <path d="M 40 330 C 15 250 25 180 60 140" stroke="#1B5E20" strokeWidth="4" fill="none" />
          {/* Individual leaflets */}
          <path d="M 37 310 Q 0 300 -10 280 Q 15 295 35 305" fill="#388E3C" />
          <path d="M 32 290 Q -15 270 -20 250 Q 10 270 30 280" fill="#2E7D32" />
          <path d="M 28 270 Q -22 245 -22 220 Q 8 245 27 258" fill="#388E3C" />
          <path d="M 25 245 Q -20 215 -12 188 Q 10 218 24 233" fill="#1B5E20" />
          <path d="M 24 220 Q -12 185 -1 160 Q 12 190 24 208" fill="#388E3C" />
          <path d="M 25 195 Q 2 160 15 138 Q 21 170 27 186" fill="#2E7D32" />
          <path d="M 29 174 Q 15 140 30 118 Q 31 150 33 166" fill="#4CAF50" />
          <path d="M 35 152 Q 25 120 42 102 Q 41 130 40 146" fill="#81C784" />
        </g>

        {/* Right Palm Leaves Garland */}
        <g id="right-leaves" opacity="0.95">
          {/* Leaf spine */}
          <path d="M 460 330 C 485 250 475 180 440 140" stroke="#1B5E20" strokeWidth="4" fill="none" />
          {/* Leaflets */}
          <path d="M 463 310 Q 500 300 510 280 Q 485 295 465 305" fill="#388E3C" />
          <path d="M 468 290 Q 515 270 520 250 Q 490 270 470 280" fill="#2E7D32" />
          <path d="M 472 270 Q 522 245 522 220 Q 492 245 473 258" fill="#388E3C" />
          <path d="M 475 245 Q 520 215 512 188 Q 490 218 476 233" fill="#1B5E20" />
          <path d="M 476 220 Q 512 185 501 160 Q 488 190 476 208" fill="#388E3C" />
          <path d="M 475 195 Q 498 160 485 138 Q 479 170 473 186" fill="#2E7D32" />
        </g>

        {/* White Frangipani Flowers with Yellow Center (Plumeria) */}
        {/* Flower 1 - Bottom Left */}
        <g id="plumeria-1" transform="translate(80, 360) scale(0.95)">
          {/* Yellow inner glow */}
          <circle cx="0" cy="0" r="45" fill="url(#plumeriaGrad)" />
          {/* 5 Petals */}
          <path d="M 0 -10 C -25 -50 -55 -25 -25 0 Z" fill="#FFFFFF" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.1))" />
          <path d="M 0 -10 C 35 -45 55 -15 25 5 Z" fill="#FFFFFF" filter="drop-shadow(2px 1px 3px rgba(0,0,0,0.1))" />
          <path d="M 20 0 C 45 25 15 55 -5 25 Z" fill="#FFFFFF" filter="drop-shadow(1px -2px 3px rgba(0,0,0,0.1))" />
          <path d="M -5 20 C -35 45 -55 15 -25 -5 Z" fill="#FFFFFF" />
          <path d="M -20 -5 C -45 -15 -15 -45 0 -15 Z" fill="#FFFFFF" />
          {/* Yellow exact core */}
          <circle cx="-5" cy="-3" r="14" fill="#FFC72C" />
          <circle cx="-5" cy="-3" r="7" fill="#FFA500" />
        </g>
        
        {/* Flower 2 - Medium Left-Center */}
        <g id="plumeria-2" transform="translate(130, 420) scale(0.75)">
          <circle cx="0" cy="0" r="45" fill="url(#plumeriaGrad)" />
          <path d="M 0 -10 C -25 -50 -55 -25 -25 0 Z" fill="#FFFFFF" />
          <path d="M 0 -10 C 35 -45 55 -15 25 5 Z" fill="#FFFFFF" />
          <path d="M 20 0 C 45 25 15 55 -5 25 Z" fill="#FFFFFF" />
          <path d="M -5 20 C -35 45 -55 15 -25 -5 Z" fill="#FFFFFF" />
          <path d="M -20 -5 C -45 -15 -15 -45 0 -15 Z" fill="#FFFFFF" />
          <circle cx="-5" cy="-3" r="14" fill="#FFC72C" />
          <circle cx="-5" cy="-3" r="6" fill="#FFA500" />
        </g>

        {/* Flower 3 - Bottom Right */}
        <g id="plumeria-3" transform="translate(420, 370) scale(0.9)">
          <circle cx="0" cy="0" r="45" fill="url(#plumeriaGrad)" />
          <path d="M 0 -10 C -25 -50 -55 -25 -25 0 Z" fill="#FFFFFF" filter="drop-shadow(-1px 2px 2px rgba(0,0,0,0.08))" />
          <path d="M 0 -10 C 35 -45 55 -15 25 5 Z" fill="#FFFFFF" filter="drop-shadow(-2px 1px 2px rgba(0,0,0,0.08))" />
          <path d="M 20 0 C 45 25 15 55 -5 25 Z" fill="#FFFFFF" />
          <path d="M -5 20 C -35 45 -55 15 -25 -5 Z" fill="#FFFFFF" />
          <path d="M -20 -5 C -45 -15 -15 -45 0 -15 Z" fill="#FFFFFF" />
          <circle cx="-5" cy="-3" r="14" fill="#FFC72C" />
          <circle cx="-5" cy="-3" r="6" fill="#FFA500" />
        </g>

        {/* Core Branding Text */}
        <g transform="translate(0, -5)">
          {/* "Phan Thiết" stylized calligraphy text */}
          <text x="250" y="270" className="brand-script-text">
            Phan Thiết
          </text>
          
          {/* "healing" modern tracking subheader text */}
          <text x="253" y="322" className="brand-sub-text">
            healing
          </text>
        </g>
      </svg>

      {/* Brand title text next to logo (optional, hidden by default if not requested) */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-sans font-extrabold text-lg tracking-tight leading-none text-current font-display">
            Phan Thiết Healing
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest leading-none mt-1 opacity-75">
            Healing & Coast
          </span>
        </div>
      )}
    </div>
  );
};
