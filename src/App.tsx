import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090D14] text-slate-200 font-sans selection:bg-amber-500/25 selection:text-amber-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
