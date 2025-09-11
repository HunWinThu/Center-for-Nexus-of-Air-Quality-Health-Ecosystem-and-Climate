import { useLayoutEffect, useRef, useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Store scroll positions for each route
const scrollPositions = new Map<string, number>();

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef<string>('');

  useLayoutEffect(() => {
    // Save current scroll position before navigating away
    if (previousPath.current && previousPath.current !== pathname) {
      scrollPositions.set(previousPath.current, window.scrollY);
    }

    // Check if this is browser back/forward navigation using React Router's navigation type
    const isBrowserNavigation = navigationType === 'POP';
    
    if (isBrowserNavigation && scrollPositions.has(pathname)) {
      // This is browser back/forward - restore position
      const savedPosition = scrollPositions.get(pathname) || 0;
      window.scrollTo(0, savedPosition);
    } else {
      // Everything else - go to top
      window.scrollTo(0, 0);
    }

    // Update previous path reference
    previousPath.current = pathname;
  }, [pathname, navigationType]);

  return null;
};
