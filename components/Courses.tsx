
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { Clock, ExternalLink } from 'lucide-react';

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Engineering' | 'Arts' | 'Science' | 'Business'>('All');

  const categories = ['All', 'Engineering', 'Arts', 'Science', 'Business'];
  
  const filteredCourses = activeTab === 'All' 
    ? COURSES 
    : COURSES.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-24 bg-[#EDF1F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-[#E1AD01] tracking-[0.2em] uppercase mb-4">Our Programs</h2>
            <p className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A]">Curated For <br/>The Modern World</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat 
                    ? 'bg-[#004B49] text-white shadow-lg' 
                    : 'bg-white text-gray-500 hover:text-[#004B49]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-[#E1AD01] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[#004B49] text-xs font-bold mb-3">
                  <Clock size={14} /> {course.duration}
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#004B49] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center justify-between border-t pt-6">
                  <button className="text-[#004B49] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    View Details <ExternalLink size={16} />
                  </button>
                  <button className="px-4 py-2 border-2 border-[#E1AD01] text-[#E1AD01] rounded-lg text-xs font-bold hover:bg-[#E1AD01] hover:text-white transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
