import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Immediate scroll to top when pathname changes - before paint
    window.scrollTo(0, 0);
    
    // Backup scroll after a minimal delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
