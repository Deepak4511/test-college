
import React, { useState, useEffect } from 'react';
import { Menu, X, School } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Apply Now', href: '#apply', primary: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#004B49] shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <School className={`w-8 h-8 ${scrolled ? 'text-white' : 'text-[#004B49]'}`} />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-[#004B49]'}`}>VERIDIAN</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  link.primary 
                    ? 'bg-[#E1AD01] text-white px-5 py-2 rounded-full hover:bg-opacity-90' 
                    : scrolled ? 'text-white hover:text-[#E1AD01]' : 'text-[#1A1A1A] hover:text-[#004B49]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-white' : 'text-[#004B49]'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#004B49] transition-transform duration-300 ${isOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-[150%]'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-medium text-white hover:bg-[#003d3a] ${link.primary ? 'text-[#E1AD01]' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
