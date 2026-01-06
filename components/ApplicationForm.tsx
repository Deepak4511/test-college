
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="apply" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#004B49] rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E1AD01] opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-sm font-bold text-[#E1AD01] tracking-[0.2em] uppercase mb-4">Apply Today</h2>
                <p className="text-5xl font-extrabold leading-tight">Start Your Journey with Veridian</p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fill out the preliminary inquiry form, and our admissions team will reach out to you within 24 hours to guide you through the process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl"><CheckCircle className="text-[#E1AD01]" /></div>
                  <p className="font-medium text-white">Direct counseling with experts</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl"><CheckCircle className="text-[#E1AD01]" /></div>
                  <p className="font-medium text-white">Scholarship eligibility check</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl"><CheckCircle className="text-[#E1AD01]" /></div>
                  <p className="font-medium text-white">Campus tour scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">Success!</h3>
                  <p className="text-gray-500">Your application has been received. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 bg-[#EDF1F2] border-0 rounded-xl focus:ring-2 focus:ring-[#004B49] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-5 py-4 bg-[#EDF1F2] border-0 rounded-xl focus:ring-2 focus:ring-[#004B49] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-5 py-4 bg-[#EDF1F2] border-0 rounded-xl focus:ring-2 focus:ring-[#004B49] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Interested Course</label>
                    <select className="w-full px-5 py-4 bg-[#EDF1F2] border-0 rounded-xl focus:ring-2 focus:ring-[#004B49] transition-all appearance-none cursor-pointer">
                      <option>Computer Science & AI</option>
                      <option>Modern Architecture</option>
                      <option>Global Economics</option>
                      <option>Biotechnology</option>
                      <option>Fine Arts & Design</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                    <textarea 
                      rows={4}
                      placeholder="Any specific questions?" 
                      className="w-full px-5 py-4 bg-[#EDF1F2] border-0 rounded-xl focus:ring-2 focus:ring-[#004B49] transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-3 py-5 bg-[#004B49] text-white font-bold rounded-xl hover:bg-opacity-90 shadow-lg shadow-[#004B49]/30 transition-all active:scale-95"
                  >
                    Send Inquiry <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
