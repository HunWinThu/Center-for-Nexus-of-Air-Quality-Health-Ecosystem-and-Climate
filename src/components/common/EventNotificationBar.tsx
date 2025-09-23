import React from 'react';

interface EventNotificationBarProps {
  onNavigateToEvents?: () => void;
}

export const EventNotificationBar: React.FC<EventNotificationBarProps> = ({ onNavigateToEvents }) => {
  // No upcoming events to display, so don't show the notification bar
  return null;
};
