import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/aqc.png';

const Footer = () => {
  return (
    <footer className="bg-earth-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-base opacity-90 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/projects" className="text-base opacity-90 hover:opacity-100 transition-opacity">Projects</Link>
              <Link to="/news" className="text-base opacity-90 hover:opacity-100 transition-opacity">News</Link>
              <Link to="/team" className="text-base opacity-90 hover:opacity-100 transition-opacity">Our Team</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Thematic Areas</h3>
            <nav className="flex flex-col space-y-2">
<div className="flex flex-col gap-2">
  <span className="text-base opacity-90">High-Quality Research</span>
  <span className="text-base opacity-90">Multi-Pollutant Approach</span>
  <span className="text-base opacity-90">Co-Benefits Assessment</span>
  <span className="text-base opacity-90">International Collaboration</span>
  <span className="text-base opacity-90">Government Assistance</span>
  <span className="text-base opacity-90">Capacity Building & Training</span>
</div>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="opacity-70" />
                <span className="text-base opacity-90">airqualitynexus@ait.ac.th</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="opacity-70" />
                <span className="text-base opacity-90">+66 9-9797-6360</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={40} className="opacity-70" />
                  <a 
                    href="https://maps.app.goo.gl/UA82JeVX5uKR2Stg6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Asian Institute of Technology, 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120, Thailand
                  </a>              
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-1">
            {/* Logo and Name */}
            <div className="flex flex-col items-center space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4">
              <img 
                src={logo} 
                alt="Air Quality Nexus Center Logo" 
                className="h-24 w-24 object-contain"
              />
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-white">Air Quality Nexus Center</h4>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://facebook.com/airqualitynexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={32} />
              </a>
              <a 
                href="https://linkedin.com/company/airqualitynexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://instagram.com/airqualitynexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
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