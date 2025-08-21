import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/aqc.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Publications', href: '/publications' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-transparent backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Air Quality Nexus" className="h-16 w-28 md:h-16 md:w-34 rounded-full" />
            <span className="text-lg md:text-2xl font-semibold leading-snug text-black">
              Center for Nexus of Air Quality,<br/> Health, Ecosystem, and Climate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navigation.map((item) => {
              if (item.name === 'About Us') {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to="/about"
                      className={`text-lg font-semibold tracking-wide transition-colors hover:text-primary ${
                        isActive('/about') || isActive('/launching-event') || isActive('/what-we-do') || isActive('/team')
                          ? 'text-primary border-b-2 border-primary pb-1'
                          : 'text-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-[-10px] group-hover:translate-y-0 z-50">
                      <div className="min-w-[250px] rounded-xl border border-border bg-white/50 bg-opacity-50 backdrop-blur-xl shadow-lg p-2">
                        <Link 
                          to="/launching-event" 
                          className="block rounded-lg px-3 py-2 text-lg font-medium hover:bg-accent hover:text-primary transition-colors"
                        >
                          Launching Event
                        </Link>
                        <Link 
                          to="/what-we-do" 
                          className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-accent hover:text-primary transition-colors"
                        >
                          Our Thematic Areas
                        </Link>
                        <Link 
                          to="/team" 
                          className="block rounded-lg px-3 py-2 text-lg font-medium hover:bg-accent hover:text-primary transition-colors"
                        >
                          Our Team
                        </Link>
                        <Link 
                          to="/committee" 
                          className="block rounded-lg px-3 py-2 text-lg font-medium hover:bg-accent hover:text-primary transition-colors"
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
                  className={`text-lg font-semibold tracking-wide border-b-2 pb-1 ${
                    ['Home', 'About Us', 'Projects', 'News', 'Publications', 'Resources', 'Contact Us'].includes(item.name)
                      ? `relative overflow-hidden group ${isActive(item.href)
                        ? 'text-primary border-primary'
                        : 'text-black border-transparent'} 
                        before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
                        before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent 
                        hover:before:left-[100%] before:transition-all before:duration-700 before:ease-in-out`
                      : `transition-colors hover:text-primary ${
                        isActive(item.href)
                          ? 'text-primary border-primary'
                          : 'text-black border-transparent'
                      }`
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md border-t border-border rounded-lg mt-2">
              {navigation.map((item) =>
                item.name === 'About Us' ? (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-lg font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-primary bg-accent'
                          : 'text-black hover:text-primary hover:bg-accent'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4">
                      <Link
                        to="/launching-event"
                        className="block px-3 py-2 text-base rounded-md text-black hover:text-primary hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Launching Event
                      </Link>
                      <Link
                        to="/what-we-do"
                        className="block px-3 py-2 text-base rounded-md text-black hover:text-primary hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        What We Do
                      </Link>
                      <Link
                        to="/team"
                        className="block px-3 py-2 text-base rounded-md text-black hover:text-primary hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Team
                      </Link>
                      <Link
                        to="/committee"
                        className="block px-3 py-2 text-base rounded-md text-black hover:text-primary hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Team
                      </Link>                      
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-lg font-medium rounded-md ${
                      isActive(item.href)
                        ? 'text-primary bg-accent'
                        : 'text-black hover:text-primary hover:bg-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
