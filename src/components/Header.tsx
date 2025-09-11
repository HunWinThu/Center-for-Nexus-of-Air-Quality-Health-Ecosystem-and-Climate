import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/AQN2.png';
import aitLogo from '@/assets/AIT.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'News', href: '/news' },
    { name: 'Publications', href: '/publications' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Navigation click handler (no manual scroll here; global ScrollToTop manages it)
  const handleNavClick = () => {
    // intentionally empty
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0.5">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-0 md:gap-1">
            <img
              src={aitLogo}
              alt="AIT"
              className="h-32 w-32 object-contain"
            />
            <img
              src={logo}
              alt="Air Quality Nexus"
              className="h-32 w-32 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navigation.map((item) => {
              if (item.name === 'About Us') {
                return (
                  <div key={item.name} className="relative group flex items-center">
                    <Link
                      to="/about"
                      onClick={handleNavClick}
                      className={`text-xl font-semibold tracking-wide border-b-2 pb-1 transition-colors hover:text-primary ${
                        isActive('/about') || isActive('/launching-event') || isActive('/our-thematic-areas') || isActive('/team') || isActive('/committee')
                          ? 'text-primary border-primary'
                          : 'text-black border-transparent'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-[-10px] group-hover:translate-y-0 z-50">
                      {/* Firefox-compatible blur effect matching header */}
                      <div className="min-w-[250px] rounded-xl bg-white/50 backdrop-blur-md border border-white/40 shadow-2xl p-2">
                        <Link 
                          to="/launching-event" 
                          onClick={handleNavClick}
                          className="block rounded-lg px-3 py-2 text-lg font-medium text-gray-900 hover:bg-white/50 hover:text-primary transition-colors"
                        >
                          Launching Event
                        </Link>
                        <Link 
                          to="/our-thematic-areas" 
                          onClick={handleNavClick}
                          className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-900 hover:bg-white/50 hover:text-primary transition-colors"
                        >
                          Our Thematic Areas
                        </Link>
                        <Link 
                          to="/team" 
                          onClick={handleNavClick}
                          className="block rounded-lg px-3 py-2 text-lg font-medium text-gray-900 hover:bg-white/50 hover:text-primary transition-colors"
                        >
                          Our Team
                        </Link>
                        <Link 
                          to="/committee" 
                          onClick={handleNavClick}
                          className="block rounded-lg px-3 py-2 text-lg font-medium text-gray-900 hover:bg-white/50 hover:text-primary transition-colors"
                        >
                          Advisory Committee
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`text-xl font-semibold tracking-wide border-b-2 pb-1 transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? 'text-primary border-primary'
                      : 'text-black border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Full screen overlay to prevent page interaction */}
            <div 
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile menu positioned from top of screen */}
            <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
              {/* Header space replica to maintain logo visibility */}
              <div className="bg-white border-b border-border px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-0.5">
                  <Link to="/" className="flex items-center gap-0 md:gap-1">
                    <img
                      src={aitLogo}
                      alt="AIT"
                      className="h-32 w-32 object-contain"
                    />
                    <img
                      src={logo}
                      alt="Air Quality Nexus"
                      className="h-32 w-32 object-contain"
                    />
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>
                    <X size={24} />
                  </Button>
                </div>
              </div>
              
              {/* Menu items */}
              <div className="bg-white/95 backdrop-blur-md border-b border-white/20 max-h-[calc(100vh-140px)] overflow-y-auto px-4 py-3 space-y-1">
                {navigation.map((item) =>
                  item.name === 'About Us' ? (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors ${
                          isActive(item.href)
                            ? 'text-gray-900 bg-blue-50'
                            : 'text-gray-800 hover:text-gray-900 hover:bg-blue-50'
                        }`}
                        onClick={handleMobileNavClick}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 bg-gray-50 rounded-md p-2 space-y-1">
                        <Link
                          to="/launching-event"
                          className="block px-3 py-2 text-base rounded-md text-gray-700 hover:text-gray-900 hover:bg-white"
                          onClick={handleMobileNavClick}
                        >
                          Launching Event
                        </Link>
                        <Link
                          to="/our-thematic-areas"
                          className="block px-3 py-2 text-base rounded-md text-gray-700 hover:text-gray-900 hover:bg-white"
                          onClick={handleMobileNavClick}
                        >
                          Our Thematic Areas
                        </Link>
                        <Link
                          to="/team"
                          className="block px-3 py-2 text-base rounded-md text-gray-700 hover:text-gray-900 hover:bg-white"
                          onClick={handleMobileNavClick}
                        >
                          Our Team
                        </Link>
                        <Link
                          to="/committee"
                          className="block px-3 py-2 text-base rounded-md text-gray-700 hover:text-gray-900 hover:bg-white"
                          onClick={handleMobileNavClick}
                        >
                          Advisory Committee
                        </Link>                      
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-gray-900 bg-blue-50'
                          : 'text-gray-800 hover:text-gray-900 hover:bg-blue-50'
                      }`}
                      onClick={handleMobileNavClick}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;