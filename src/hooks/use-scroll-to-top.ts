import { useEffect } from 'react';

/**
 * Custom hook to scroll to top when component mounts or dependency changes
 * @param dependency - Optional dependency to trigger scroll on change
 */
export const useScrollToTop = (dependency?: any) => {
  useEffect(() => {
    // Multiple scroll attempts to ensure it works
    window.scrollTo(0, 0);
    
    // Force scroll after a brief delay
    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [dependency]);
};
