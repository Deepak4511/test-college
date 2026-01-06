
import React from 'react';
import { School, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <School className="w-8 h-8 text-[#E1AD01]" />
              <span className="text-2xl font-bold tracking-tight">VERIDIAN</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Excellence in research, leadership in innovation. Veridian Global University is a leading institution dedicated to preparing students for global impact.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1AD01] transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1AD01] transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1AD01] transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1AD01] transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#E1AD01] rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">About University</a></li>
              <li><a href="#courses" className="hover:text-[#E1AD01] transition-all">Academic Programs</a></li>
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Student Life</a></li>
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Research Projects</a></li>
              <li><a href="#faq" className="hover:text-[#E1AD01] transition-all">Help & Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#E1AD01] rounded-full"></span> Campus Info
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Library System</a></li>
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Sports Facilities</a></li>
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Alumni Portal</a></li>
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Events Calendar</a></li>
              <li><a href="#" className="hover:text-[#E1AD01] transition-all">Job Openings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#E1AD01] rounded-full"></span> Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-[#E1AD01] shrink-0" size={24} />
                <span className="text-gray-400">123 Academic Square, North Campus, NY 10001, USA</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#E1AD01] shrink-0" size={24} />
                <span className="text-gray-400">+1 (800) 123 4567</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#E1AD01] shrink-0" size={24} />
                <span className="text-gray-400">admissions@veridian.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© 2025 Veridian Global University. All rights reserved. Magnificent Education Since 1954.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
