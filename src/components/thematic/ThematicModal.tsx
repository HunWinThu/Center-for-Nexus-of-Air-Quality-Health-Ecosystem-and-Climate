import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThematicModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  imageAlts: string[];
  position: 'left' | 'right';
  hexagonRect?: DOMRect | null;
}

export const ThematicModal: React.FC<ThematicModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  images,
  imageAlts,
  position = 'right',
  hexagonRect
}) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate position based on hexagon location
  const getModalStyle = () => {
    if (!hexagonRect) {
      return {
        top: '50%',
        left: position === 'left' ? '10%' : 'auto',
        right: position === 'right' ? '10%' : 'auto',
        transform: 'translateY(-50%)'
      };
    }

    const modalWidth = 600; // Approximate modal width - increased
    const modalHeight = 800; // Approximate modal height - increased
    const spacing = 20; // Space between hexagon and modal

    let top = hexagonRect.top + hexagonRect.height / 2 - modalHeight / 2;
    let left: number | undefined;
    let right: number | undefined;

    // Ensure modal doesn't go off-screen vertically
    const maxTop = window.innerHeight - modalHeight - 20;
    const minTop = 20;
    top = Math.max(minTop, Math.min(maxTop, top));

    if (position === 'left') {
      right = window.innerWidth - hexagonRect.left + spacing;
      // Ensure modal doesn't go off-screen on the left
      if (right > window.innerWidth - modalWidth - 20) {
        right = window.innerWidth - modalWidth - 20;
      }
    } else {
      left = hexagonRect.right + spacing;
      // Ensure modal doesn't go off-screen on the right
      if (left > window.innerWidth - modalWidth - 20) {
        left = window.innerWidth - modalWidth - 20;
      }
    }

    return {
      position: 'fixed' as const,
      top: `${top}px`,
      left: left !== undefined ? `${left}px` : undefined,
      right: right !== undefined ? `${right}px` : undefined,
      zIndex: 50
    };
  };
  return (
    <>
      {isOpen && (
        <>
          {/* Overlay without blur */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={onClose}
          />
          
          {/* Modal positioned relative to hexagon */}
          <div
            className="w-[600px] max-w-[90vw] bg-background rounded-2xl shadow-2xl border border-border/20 overflow-hidden transform transition-all duration-300 ease-out"
            style={getModalStyle()}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-md border border-border/20"
              >
                <X size={16} />
              </Button>
            </div>

            <div className="relative">
              {/* Images Section - Display both images */}
              <div className="relative w-full">
                {images.length > 0 && (
                  <div className="grid grid-cols-1 gap-3">
                    {/* First Image */}
                    <div className="relative h-64 overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={images[0]}
                        alt={imageAlts[0]}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>
                    
                    {/* Second Image (if exists) */}
                    {images.length > 1 && (
                      <div className="relative h-64 overflow-hidden rounded-lg bg-gray-50">
                        <img
                          src={images[1]}
                          alt={imageAlts[1]}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-primary leading-tight">
                    {title}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  <div className="h-px bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
                  <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
