import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EventNotificationBar } from '@/components/common/EventNotificationBar';
import { motion, AnimatePresence } from 'framer-motion';
import { useLayoutStore } from '@/store';
import { useNavigate, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isMobileMenuOpen, closeMobileMenu } = useLayoutStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToEvents = () => {
    if (location.pathname === '/') {
      // If we're on home page, scroll to events section
      setTimeout(() => {
        const eventsSection = document.getElementById('news-events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to home page and then scroll to events section
      navigate('/');
      setTimeout(() => {
        const eventsSection = document.getElementById('news-events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <EventNotificationBar onNavigateToEvents={handleNavigateToEvents} />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          className="bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={isMobileMenuOpen ? closeMobileMenu : undefined}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
