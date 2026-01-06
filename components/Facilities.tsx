
import React from 'react';
import { FACILITIES } from '../constants';
import { FlaskConical, Library, Trophy, Music } from 'lucide-react';

const iconMap: Record<string, any> = {
  FlaskConical,
  Library,
  Trophy,
  Music
};

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#E1AD01] tracking-[0.2em] uppercase mb-4">World Class Facilities</h2>
          <p className="text-4xl lg:text-5xl font-extrabold">A Campus Built For You</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {FACILITIES.map((facility) => {
              const IconComp = iconMap[facility.icon];
              return (
                <div key={facility.id} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#E1AD01] transition-all hover:bg-white/10 group">
                  <div className="w-12 h-12 bg-[#E1AD01]/20 rounded-xl flex items-center justify-center text-[#E1AD01] mb-6 group-hover:scale-110 transition-transform">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>

          <div className="relative rounded-[3rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200" 
              alt="State of the art campus" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <p className="text-[#E1AD01] font-bold tracking-[0.3em] uppercase mb-4">The Student Experience</p>
              <h3 className="text-3xl font-bold">Cutting edge infrastructure designed for collaboration and growth.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
