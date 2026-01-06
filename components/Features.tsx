
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#E1AD01] tracking-[0.2em] uppercase mb-4">Why VGU?</h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A]">Defining Excellence Since 1954</p>
          <div className="w-24 h-1.5 bg-[#004B49] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-[#EDF1F2] rounded-3xl hover:bg-[#004B49] transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#004B49] group-hover:bg-[#E1AD01] group-hover:text-white transition-colors duration-500 mb-8 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-500">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
