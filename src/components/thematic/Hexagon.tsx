import React from 'react';

interface HexagonProps {
  title: string;
  bgColor?: string;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  isCenter?: boolean;
}

export const Hexagon: React.FC<HexagonProps> = ({
  title,
  bgColor = '',
  onClick,
  className = '',
  isCenter = false
}) => {
  const hexagonStyle = {
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    transition: 'all 0.3s ease',
  };

  return (
    <div
      className={`
        relative w-32 h-32 ${bgColor || 'bg-gradient-to-br from-primary/80 to-primary'}
        cursor-pointer hover:scale-105 hover:shadow-lg transform transition-all duration-300
        ${isCenter ? 'w-40 h-40' : ''}
        ${className}
      `}
      style={hexagonStyle}
      onClick={onClick}
    >
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span 
          className={`
            text-white font-bold text-center leading-tight
            ${isCenter ? 'text-2xl' : 'text-sm'}
          `}
        >
          {title}
        </span>
      </div>
      
      {/* Hover effect overlay */}
      <div 
        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={hexagonStyle}
      />
    </div>
  );
};
