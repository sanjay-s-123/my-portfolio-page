import React from 'react';
import { ArrowUp, Github, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE, PRISMATIX4_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-obsidian-950 py-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-obsidian-850 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 text-xs">
                [SS]
              </div>
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                SANJAY S <span className="text-amber-500">//</span> <span className="text-teal-cyber">PRISMATIX4</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-sm">
              Engineering autonomous voice agents, real-time WebRTC communications, and embedded simulation engines.
            </p>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">Philosophy</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Arsenal</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Flagship Systems</a>
            <a href="#leadership" className="hover:text-amber-400 transition-colors">PRISMATIX4</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-850 border border-white/10 text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-850 border border-white/10 text-slate-400 hover:text-teal-cyber transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PRISMATIX4_INFO.hubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-850 border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors"
              aria-label="PRISMATIX4 Hub"
            >
              <ExternalLink size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-obsidian-850 border border-white/10 text-slate-400 hover:text-white hover:border-amber-400 transition-colors ml-2"
              title="Return to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-teal-cyber" />
            <span>&copy; {new Date().getFullYear()} Sanjay S. All rights reserved. Built under PRISMATIX4.</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry Nominal • All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
