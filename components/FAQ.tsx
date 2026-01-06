
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#EDF1F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm text-[#004B49] mb-6">
            <HelpCircle size={28} />
          </div>
          <h2 className="text-sm font-bold text-[#E1AD01] tracking-[0.2em] uppercase mb-4">Got Questions?</h2>
          <p className="text-4xl font-extrabold text-[#1A1A1A]">Frequently Asked Questions</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl transition-all overflow-hidden ${openIndex === idx ? 'shadow-lg border-l-4 border-[#004B49]' : 'shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-[#1A1A1A]">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#004B49]' : 'text-gray-400'}`} 
                />
              </button>
              <div className={`transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-gray-600 leading-relaxed border-t pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
