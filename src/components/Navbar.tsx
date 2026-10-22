import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Terminal, Cpu } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Terminal' },
    { href: '#about', label: 'Philosophy' },
    { href: '#skills', label: 'Arsenal' },
    { href: '#projects', label: 'Projects' },
    { href: '#leadership', label: 'PRISMATIX4' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#090D14]/85 backdrop-blur-xl border-amber-500/20 shadow-2xl shadow-black/80'
            : 'bg-[#090D14]/50 backdrop-blur-md border-white/5'
        }`}
      >
        {/* Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
        >
          <div className="w-9 h-9 rounded-lg bg-obsidian-850 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] transition-all">
            <span className="text-xs tracking-tight">[SS]</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-200 tracking-wider">
              <span>SANJAY</span>
              <span className="text-amber-500">//</span>
              <span className="text-teal-cyber font-bold">P4</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:inline-block">
              FOUNDER & ARCHITECT
            </span>
          </div>
        </a>

        {/* Center Quick Anchor Links */}
        <div className="hidden md:flex items-center gap-1 bg-obsidian-900/60 p-1 rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/25 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Badge Pill */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PROFILE.links.prismatix4}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_16px_rgba(245,158,11,0.3)] transition-all group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>Founder @ PRISMATIX4</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PROFILE.links.prismatix4}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-amber-400 bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono flex items-center gap-1"
          >
            <span>P4</span>
            <ExternalLink size={11} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-850 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/30 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-obsidian-900/95 backdrop-blur-2xl border border-amber-500/20 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-mono text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <Terminal size={14} className="text-slate-600" />
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-white/10">
            <a
              href={PROFILE.links.prismatix4}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30"
            >
              <Cpu size={14} />
              <span>Founder @ PRISMATIX4 Hub ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
