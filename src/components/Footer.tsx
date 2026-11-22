import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-amber-500/15 bg-obsidian-950/85 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Monogram & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400">
              SS
            </div>
            <div>
              <span className="font-bold text-white text-sm block font-sans">
                {PROFILE.name}
              </span>
              <span className="text-[10px] text-slate-400">
                Founder &amp; Lead Systems Architect • PRISMATIX4
              </span>
            </div>
          </div>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs">
            <a href="#home" className="hover:text-amber-400 transition-colors">Terminal</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">Philosophy</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Arsenal</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Systems</a>
            <a href="#milestones" className="hover:text-amber-400 transition-colors">Milestones</a>
            <a href="#leadership" className="hover:text-amber-400 transition-colors">PRISMATIX4</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Dispatch</a>
          </div>

          {/* Scroll to Top with Spring */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-obsidian-850 border border-white/10 hover:border-amber-400 text-slate-300 hover:text-amber-300 transition-all flex items-center gap-1.5 shadow-lg group"
            aria-label="Scroll to top of page"
          >
            <span className="text-[11px] font-mono">Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <span>© {new Date().getFullYear()} Sanjay S. All rights reserved. Engineered under PRISMATIX4.</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React 18, TypeScript &amp; WebSockets</span>
            <span className="text-amber-500">•</span>
            <span className="text-teal-cyber">Sub-50ms Responsive</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
