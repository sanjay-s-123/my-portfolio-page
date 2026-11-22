import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  return (
    <div className="relative min-h-screen bg-[#090D14] text-slate-200 font-sans selection:bg-amber-500/25 selection:text-amber-300 overflow-x-hidden">
      {/* Cyber Boot Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Interactive Background Particle & Node Canvas */}
      <CyberCanvas />

      {/* Main Content with Smooth Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
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
      </motion.div>
    </div>
  );
};

export default App;
