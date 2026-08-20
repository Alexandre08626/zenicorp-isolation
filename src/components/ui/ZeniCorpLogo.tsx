import React from 'react';

interface ZeniCorpLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'light' | 'dark' | 'eco' | 'white';
  showText?: boolean;
  className?: string;
}

const ZeniCorpLogo: React.FC<ZeniCorpLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl'
  };

  const colorVariants = {
    light: {
      primary: '#166534',
      secondary: '#4ADE80',
      text: '#1F2937'
    },
    dark: {
      primary: '#166534',
      secondary: '#4ADE80',
      text: '#000000'
    },
    eco: {
      primary: '#166534',
      secondary: '#86EFAC',
      text: '#166534'
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      text: '#FFFFFF'
    }
  };

  const colors = colorVariants[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Modern Geometric Z with Eco Theme */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle with Eco Gradient */}
          <defs>
            <linearGradient id={`eco-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <filter id="eco-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Circle with Eco Theme */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill={`url(#eco-gradient-${variant})`}
            stroke={colors.primary}
            strokeWidth="2"
            filter="url(#eco-glow)"
          />
          
          {/* Inner Design - Z with Eco Elements */}
          <g transform="translate(50, 50)">
            {/* Main Z Letter */}
            <path
              d="M-20,-25 L20,-25 L20,-15 L-5,-15 L20,15 L20,25 L-20,25 L-20,15 L5,15 L-20,-15 Z"
              fill={variant === 'white' ? '#000000' : '#FFFFFF'}
              className="drop-shadow-sm"
            />
            
            {/* Eco Leaf Elements */}
            <path
              d="M-30,-20 Q-35,-25 -30,-30 Q-25,-25 -30,-20"
              fill={colors.secondary}
              opacity="0.8"
            />
            <path
              d="M30,20 Q35,25 30,30 Q25,25 30,20"
              fill={colors.secondary}
              opacity="0.8"
            />
            
            {/* Energy Dots */}
            <circle cx="-25" cy="0" r="2" fill={colors.secondary} opacity="0.9" />
            <circle cx="25" cy="0" r="2" fill={colors.secondary} opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-heading font-black ${textSizeClasses[size]} tracking-tight leading-none`}
            style={{ color: colors.text }}
          >
            ZENI<span style={{ color: colors.primary }}>CORP</span>
          </span>
          {size !== 'sm' && (
            <span 
              className="text-xs font-medium tracking-wider opacity-75 uppercase"
              style={{ color: colors.text }}
            >
              Isolation • Éco-Responsable
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ZeniCorpLogo;