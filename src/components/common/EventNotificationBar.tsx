import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventNotificationBarProps {
  onNavigateToEvents?: () => void;
}

export const EventNotificationBar: React.FC<EventNotificationBarProps> = ({ onNavigateToEvents }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Sample event data - you can replace this with dynamic data
  const upcomingEvent = {
    title: "International Air Quality and Climate Research Symposium 2025",
    date: "November 15-17, 2025",
    location: "Bangkok, Thailand",
    description: "Join leading researchers and policymakers in advancing air quality solutions"
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleViewEvents = () => {
    if (onNavigateToEvents) {
      onNavigateToEvents();
    } else {
      // Scroll to the News & Events section on the home page
      const eventsSection = document.getElementById('news-events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Don't hide the notification bar when viewing events
    // setIsVisible(false); // Removed this line
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-gradient-to-r from-nature-green via-sky-blue to-ocean-blue text-white relative overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Event Content */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              {/* Event Icon */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <h3 className="font-semibold text-sm sm:text-base truncate">
                    🎉 {upcomingEvent.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-white/90 mt-1 sm:mt-0">
                    <Clock className="w-3 h-3" />
                    <span>{upcomingEvent.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{upcomingEvent.location}</span>
                  </div>
                </div>
                <p className="text-xs text-white/80 mt-1 hidden sm:block">
                  {upcomingEvent.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                onClick={handleViewEvents}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm text-xs sm:text-sm px-3 sm:px-4 py-2 h-auto"
              >
                <span className="hidden sm:inline">View All Events</span>
                <span className="sm:hidden">Events</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
              
              <Button
                onClick={handleClose}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 w-8 h-8 p-0 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
};
