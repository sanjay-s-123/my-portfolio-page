import React from 'react';
import { CyberCanvas } from './components/CyberCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Milestones } from './components/Milestones';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#090D14] text-slate-200 font-sans selection:bg-amber-500/25 selection:text-amber-300 overflow-x-hidden">
      {/* Interactive Background Particle & Node Canvas */}
      <CyberCanvas />

      {/* Modern Sticky Navigation with Scroll Progress */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Milestones />
        <Leadership />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
};

export default App;
