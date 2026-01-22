import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/airQC6.png';

const Footer = () => {
  return (
    <footer className="bg-earth-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-24 items-start justify-between">
          {/* Quick Links */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-1.5">
              <Link to="/about" className="text-sm sm:text-base opacity-90 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/projects" className="text-sm sm:text-base opacity-90 hover:opacity-100 transition-opacity">Projects</Link>
              <Link to="/news" className="text-sm sm:text-base opacity-90 hover:opacity-100 transition-opacity">News</Link>
              <Link to="/team" className="text-sm sm:text-base opacity-90 hover:opacity-100 transition-opacity">Our Team</Link>
            </nav>
          </div>

          {/* Services */}

          {/* Contact Info */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 md:justify-start">
                <Mail size={16} className="opacity-70 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base opacity-90 break-all">airqualitynexus@ait.ac.th</span>
              </div>
              <div className="flex items-center space-x-2 md:justify-start">
                <Phone size={16} className="opacity-70 flex-shrink-0" />
                <span className="text-sm sm:text-base opacity-90">(66-2) 524-5641 / +66 9-9797-6360</span>
              </div>
              <div className="flex items-start space-x-2 md:justify-start">
                <MapPin size={16} className="opacity-70 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/UA82JeVX5uKR2Stg6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base opacity-90 hover:underline hover:opacity-100 transition-opacity"
                >
                  Asian Institute of Technology, 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120, Thailand
                </a>              
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-2">
          <div className="flex flex-col items-center space-y-2">
            {/* Logo and Name */}
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
              <img 
                src={logo} 
                alt="Air Quality Nexus Center Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Air Quality Nexus Center</h4>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="https://facebook.com/airqualitynexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} className="sm:w-8 sm:h-8" />
              </a>
              <a 
                href="https://linkedin.com/company/airqualitynexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="sm:w-8 sm:h-8" />
              </a>
              <a 
                href="https://instagram.com/airqualitynexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:w-7 sm:h-7" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm opacity-90">
                © 2024 Air Quality Nexus Center. All rights reserved.
              </p>
              <p className="text-xs opacity-70 mt-1">
                Leading research in air quality, health, ecosystem, and climate nexus
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;