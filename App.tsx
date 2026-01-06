
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import FAQ from './components/FAQ';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EDF1F2] selection:bg-[#E1AD01] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Facilities />
        <FAQ />
        <ApplicationForm />
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
};

export default App;
