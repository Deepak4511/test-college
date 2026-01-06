
import React from 'react';
import { ArrowRight, Play, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#EDF1F2]">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004B49] clip-path-polygon hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E1AD01] opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#004B49] uppercase bg-[#004B49]/10 rounded-full">
              Empowering Future Leaders
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-tight">
              Magnificence in <span className="text-[#004B49]">Education</span> & Research.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              Veridian Global University is where curiosity meets technology. Join a community of innovators, thinkers, and creators shaping tomorrow.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#courses" className="flex items-center gap-2 px-8 py-4 bg-[#004B49] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-[#004B49]/30">
              Explore Courses <ArrowRight size={20} />
            </a>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded-lg border-2 border-gray-100 hover:border-[#E1AD01] transition-all group">
              <span className="bg-[#E1AD01]/10 p-2 rounded-full group-hover:bg-[#E1AD01]/20"><Play size={16} fill="#E1AD01" className="text-[#E1AD01]" /></span>
              Watch Campus Tour
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-[#1A1A1A]">15k+</p>
              <p className="text-sm text-gray-500">Total Students</p>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-[#1A1A1A]">200+</p>
              <p className="text-sm text-gray-500">Expert Faculty</p>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-[#1A1A1A]">120+</p>
              <p className="text-sm text-gray-500">Awards Won</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-[#E1AD01] rounded-[2rem] opacity-20 rotate-3 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1523050853063-bd8012fec05f?auto=format&fit=crop&q=80&w=1000" 
            alt="University Campus" 
            className="relative z-10 w-full aspect-square object-cover rounded-[2rem] shadow-2xl"
          />
          <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-[#E1AD01] p-3 rounded-xl text-white">
              {/* Fixed: Award icon is now properly imported from lucide-react */}
              <Award size={32} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Top Ranked</p>
              <p className="text-xl font-extrabold text-[#1A1A1A]">#1 in Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
