import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, ShieldCheck } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'INITIALIZING PRISMATIX4 KERNEL...',
  'MOUNTING AUTONOMOUS AGENT MESH...',
  'CALIBRATING WEBRTC SIGNALING [<45ms]...',
  'ALL SYSTEMS NOMINAL. LAUNCHING INTERFACE.'
];

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 250);
      }, 400);
      return () => clearTimeout(quickTimer);
    }

    // Smoothly increment progress from 0 to 100 over ~1.7s
    const startTime = performance.now();
    const duration = 1750;
    let rafId: number;

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 28) setLogIndex(0);
      else if (pct < 58) setLogIndex(1);
      else if (pct < 88) setLogIndex(2);
      else setLogIndex(3);

      if (elapsed < duration) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setLogIndex(3);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 480);
        }, 220);
      }
    };

    rafId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#090D14] flex flex-col items-center justify-center px-6 overflow-hidden select-none"
        >
          {/* Subtle cyber grid and ambient radial glows */}
          <div className="absolute inset-0 terminal-grid opacity-45 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-teal-cyber/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-lg bg-obsidian-850/80 border border-white/10 hover:border-amber-500/40 text-[11px] font-mono text-slate-400 hover:text-amber-300 transition-colors"
          >
            Skip Intro ❯
          </button>

          {/* Center Core */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full">
            
            {/* Orbital Rings + Monogram */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
              {/* Outer Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-amber-500/35"
              />
              {/* Inner Counter-Rotating Teal Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-teal-cyber/40 border-t-transparent border-l-transparent"
              />
              {/* Center Monogram Box */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-16 rounded-2xl bg-obsidian-850 border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center justify-center"
              >
                <span className="font-mono font-bold text-xl text-amber-400 tracking-tighter">
                  [SS]
                </span>
              </motion.div>
            </div>

            {/* Identity Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-center mb-6"
            >
              <div className="flex items-center justify-center gap-2 font-mono text-sm font-bold text-white tracking-widest mb-1">
                <span>SANJAY S</span>
                <span className="text-amber-500">//</span>
                <span className="text-teal-cyber">PRISMATIX4</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                Systems Architect &amp; Autonomous AI
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-amber-400 flex items-center gap-1.5">
                  <Cpu size={12} className="animate-pulse" />
                  <span>SYSTEM BOOT</span>
                </span>
                <span className="text-slate-300 font-bold">{progress}%</span>
              </div>

              <div className="h-1.5 w-full bg-obsidian-850 rounded-full overflow-hidden border border-white/10 p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-teal-cyber rounded-full transition-all duration-75 shadow-[0_0_12px_rgba(245,158,11,0.7)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Dynamic Boot Log Line */}
              <div className="flex items-center justify-between pt-1 min-h-[24px]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 truncate">
                  <Terminal size={12} className="text-teal-cyber shrink-0" />
                  <span className="truncate">{BOOT_LOGS[logIndex]}</span>
                </div>
                {progress === 100 && (
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0 ml-2" />
                )}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
