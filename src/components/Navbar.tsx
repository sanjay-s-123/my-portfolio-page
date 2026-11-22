import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Terminal, Cpu, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'milestones', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 160;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Terminal', id: 'home' },
    { href: '#about', label: 'Philosophy', id: 'about' },
    { href: '#skills', label: 'Arsenal', id: 'skills' },
    { href: '#projects', label: 'Systems', id: 'projects' },
    { href: '#milestones', label: 'Milestones', id: 'milestones' },
    { href: '#leadership', label: 'PRISMATIX4', id: 'leadership' },
    { href: '#contact', label: 'Dispatch', id: 'contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-obsidian-950/40 z-[60] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 via-teal-cyber to-orange-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
        <nav
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#090D14]/90 backdrop-blur-2xl border-amber-500/25 shadow-2xl shadow-black/80'
              : 'bg-[#090D14]/60 backdrop-blur-md border-white/5'
          }`}
        >
          {/* Monogram Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
          >
            <div className="w-9 h-9 rounded-xl bg-obsidian-850 border border-amber-500/35 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.45)] group-hover:scale-105 transition-all">
              <span className="text-xs tracking-tight">[SS]</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-200 tracking-wider">
                <span>SANJAY</span>
                <span className="text-amber-500">//</span>
                <span className="text-teal-cyber font-bold">P4</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:inline-block">
                FOUNDER &amp; ARCHITECT
              </span>
            </div>
          </a>

          {/* Center Navigation Links with Smooth Active State */}
          <div className="hidden md:flex items-center gap-1 bg-obsidian-900/80 p-1 rounded-xl border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-amber-500/15 border border-amber-500/30 rounded-lg shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Status Badge & External Collective Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400">
              <Activity size={12} className="animate-pulse" />
              <span>SYSTEMS ONLINE</span>
            </div>

            <a
              href={PROFILE.links.prismatix4}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(245,158,11,0.35)] transition-all group"
            >
              <Cpu size={13} className="text-amber-400 group-hover:rotate-45 transition-transform" />
              <span>PRISMATIX4</span>
              <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-obsidian-850 border border-amber-500/30 text-amber-400 hover:border-amber-400 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-4 rounded-2xl bg-[#090D14]/95 border border-amber-500/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 px-2">
                <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                  <Terminal size={14} />
                  <span>NAVIGATION MATRIX</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-amber-300 bg-amber-500/15 border border-amber-500/30 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      #{link.id}
                    </span>
                  </a>
                );
              })}

              <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between">
                <a
                  href={PROFILE.links.prismatix4}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 hover:bg-amber-500/25 transition-colors"
                >
                  <Cpu size={14} />
                  <span>Visit PRISMATIX4 Official Hub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
