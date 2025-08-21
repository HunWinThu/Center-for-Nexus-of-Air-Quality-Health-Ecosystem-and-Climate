import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

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
              <Link to="/blog" className="text-base opacity-90 hover:opacity-100 transition-opacity">Projects</Link>
              <Link to="/activities" className="text-base opacity-90 hover:opacity-100 transition-opacity">News</Link>
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

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Air Quality Nexus Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;