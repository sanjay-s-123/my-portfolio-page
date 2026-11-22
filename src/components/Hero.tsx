import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Radio, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  RefreshCw, 
  Wifi, 
  Bot 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'webrtc' | 'agent'>('telemetry');
  const [pingCount, setPingCount] = useState(18);
  const [latency, setLatency] = useState(24);
  const [isPinging, setIsPinging] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [cycleIndex, setCycleIndex] = useState(0);

  // Cycling technical roles
  const specializations = [
    "Autonomous Voice AI Systems",
    "Sub-50ms Real-Time WebRTC Networks",
    "Distributed Microservice Backends",
    "WebAssembly Virtual Hardware Engines"
  ];

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % specializations.length);
    }, 3200);
    return () => clearInterval(cycleInterval);
  }, [specializations.length]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' UTC+05:30');
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerPing = () => {
    setIsPinging(true);
    setTimeout(() => {
      setLatency(Math.floor(Math.random() * 14) + 16);
      setPingCount((prev) => prev + 1);
      setIsPinging(false);
    }, 350);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-soft-float" />
      <div className="absolute bottom-12 -right-36 w-96 h-96 bg-teal-cyber/10 rounded-full blur-[150px] pointer-events-none animate-soft-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Engineering Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 text-xs font-mono font-semibold text-amber-400 badge-glow"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>// FOUNDER &amp; FULL-STACK SYSTEMS ARCHITECT</span>
            </motion.div>

            {/* Dynamic Rotating Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans leading-[1.12] mb-6">
              Architecting{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={specializations[cycleIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 glow-amber-text block"
                  >
                    {specializations[cycleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              from Concept to Production.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed mb-4 max-w-2xl">
              Founder of{' '}
              <a 
                href={PROFILE.links.prismatix4} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 decoration-amber-500/40 hover:decoration-amber-400 transition-colors"
              >
                PRISMATIX4
              </a>
              . Bridging proactive voice AI agents, real-time WebRTC care networks, and embedded hardware simulation engines.
            </p>

            <p className="text-sm text-slate-400 font-mono mb-8 max-w-2xl leading-relaxed flex items-center gap-2">
              <span className="text-teal-cyber font-bold">❯</span> 
              <span>Orchestrating high-concurrency microservices, applied neural networks, and low-level firmware.</span>
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-obsidian-950 font-bold font-sans text-sm hover:from-amber-400 hover:to-orange-400 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] transition-all transform active:scale-95 group"
              >
                <span>Explore Engineered Systems</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PROFILE.links.prismatix4}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian-850/80 border border-amber-500/30 text-slate-200 font-mono text-xs hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all group"
              >
                <Cpu size={14} className="text-amber-400 group-hover:rotate-90 transition-transform" />
                <span>Visit PRISMATIX4 Official</span>
                <ExternalLink size={13} />
              </a>

              {/* Social Icons with Tooltip Hover */}
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-obsidian-850 border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all transform hover:scale-105"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-obsidian-850 border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all transform hover:scale-105"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Stats Grid with Interactive Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10">
              {PROFILE.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col p-3 rounded-xl bg-obsidian-850/60 border border-white/5 hover:border-amber-500/30 transition-all group cursor-default"
                >
                  <span className="text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Systems Terminal Console (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-amber-500/30 shadow-2xl relative overflow-hidden group">
              
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-amber-400/90 font-medium">
                    prismatix4.system.node-01
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                  <Activity size={12} className="text-teal-cyber animate-pulse" />
                  <span>{currentTime || 'RUNNING'}</span>
                </div>
              </div>

              {/* Console Mode Switcher */}
              <div className="flex items-center gap-1.5 mb-5 bg-obsidian-950/80 p-1 rounded-xl border border-white/5">
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`flex-1 py-1.5 px-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'telemetry'
                      ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/35 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Wifi size={13} />
                  <span>Telemetry</span>
                </button>
                <button
                  onClick={() => setActiveTab('webrtc')}
                  className={`flex-1 py-1.5 px-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'webrtc'
                      ? 'bg-teal-cyber/20 text-teal-300 font-semibold border border-teal-cyber/35 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Radio size={13} />
                  <span>WebRTC</span>
                </button>
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`flex-1 py-1.5 px-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'agent'
                      ? 'bg-orange-500/20 text-orange-300 font-semibold border border-orange-500/35 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Bot size={13} />
                  <span>Agent Loop</span>
                </button>
              </div>

              {/* Tab 1: Real-Time Network Telemetry */}
              {activeTab === 'telemetry' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Signaling Node:
                    </span>
                    <span className="text-amber-300 font-bold">PRISMATIX4 Gateway</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Round-Trip Latency:</span>
                    <span className="text-emerald-400 font-bold">{latency} ms (Nominal)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Pings Dispatched:</span>
                    <span className="text-teal-cyber font-bold">{pingCount} Verified Packets</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Frame Transport:</span>
                    <span className="text-slate-200 font-bold">Binary WebSockets 60FPS</span>
                  </div>
                </div>
              )}

              {/* Tab 2: WebRTC Signaling Diagnostics */}
              {activeTab === 'webrtc' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">SDP Handshake:</span>
                    <span className="text-teal-cyber font-bold">Encrypted P2P Offer/Answer</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">ICE Candidates:</span>
                    <span className="text-emerald-400 font-bold">Host / srflx Connected</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">STUN/TURN Fallback:</span>
                    <span className="text-amber-300 font-bold">Standby Relay Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Audio/Video Codec:</span>
                    <span className="text-slate-200 font-bold">Opus / VP8 Adaptive</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Autonomous Agent Loop */}
              {activeTab === 'agent' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Autonomous Trigger:</span>
                    <span className="text-orange-400 font-bold">Proactive Lockscreen VoIP</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Speech-to-Speech:</span>
                    <span className="text-emerald-400 font-bold">&lt; 320ms Turnaround</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Context Retention:</span>
                    <span className="text-amber-300 font-bold">Vector Embeddings Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Life OS Sync:</span>
                    <span className="text-teal-cyber font-bold">4 Categories Indexed</span>
                  </div>
                </div>
              )}

              {/* Live Action Benchmark Footer */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Deterministic Mesh
                </span>
                <button
                  onClick={triggerPing}
                  disabled={isPinging}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 hover:border-amber-400 transition-all disabled:opacity-50"
                >
                  <RefreshCw size={12} className={isPinging ? 'animate-spin text-amber-400' : ''} />
                  <span>{isPinging ? 'Sampling Latency...' : 'Ping Telemetry'}</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
