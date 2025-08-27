import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
   
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl">
                ARTIFYLABS
              </span>
            </Link>
            <p className="font-body text-white/80 mb-6 max-w-md">
              ARTIFYLABS is a next‑gen AI marketing studio helping brands grow
              with smarter video, reels, and social.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@artifylabs.com" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/+919998133006" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/_artifylabs/"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="font-body text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:artifylabs01@gmail.com"
                className="font-body text-white/80 hover:text-white transition-colors block"
              >
                artifylabs01@gmail.com
              </a>
              <a 
                href="https://wa.me/+919998133006"
                className="font-body text-white/80 hover:text-white transition-colors block"
              >
                WhatsApp: +91-9998133006
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-body text-white/60">
            © {new Date().getFullYear()} ARTIFYLABS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;