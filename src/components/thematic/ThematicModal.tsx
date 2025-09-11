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
    
    const handleClickOutside = (e: MouseEvent) => {
      // Close modal if clicking outside
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate position based on hexagon location
  const getModalStyle = () => {
    // If no hexagonRect or on mobile, center the modal
    if (!hexagonRect || window.innerWidth <= 768) {
      return {
        position: 'fixed' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 50,
        maxHeight: '90vh',
        overflowY: 'auto' as const
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
          {/* Overlay - Enhanced for mobile */}
          <div
            className="modal-overlay fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            style={{ touchAction: 'none' }}
          />
          
          {/* Modal positioned relative to hexagon */}
          <div
            className="w-[600px] max-w-[95vw] max-h-[90vh] bg-background rounded-2xl shadow-2xl border border-border/20 overflow-hidden transform transition-all duration-300 ease-out"
            style={getModalStyle()}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Enhanced for mobile */}
            <div className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-10 w-10 rounded-full bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg border border-border/20 touch-manipulation"
                style={{ minHeight: '44px', minWidth: '44px' }} // iOS minimum touch target
              >
                <X size={20} />
              </Button>
            </div>

            <div className="relative overflow-y-auto max-h-[90vh]">
              {/* Images Section - Display both images */}
              <div className="relative w-full">
                {images.length > 0 && (
                  <div className="grid grid-cols-1 gap-3 p-4">
                    {/* First Image */}
                    <div className="relative h-48 md:h-64 overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={images[0]}
                        alt={imageAlts[0]}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>
                    
                    {/* Second Image (if exists) */}
                    {images.length > 1 && (
                      <div className="relative h-48 md:h-64 overflow-hidden rounded-lg bg-gray-50">
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
              <div className="p-4 md:p-8 space-y-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary leading-tight">
                    {title}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  <div className="h-px bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
                  <div className="max-h-60 md:max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
