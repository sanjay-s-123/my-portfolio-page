import React, { useState } from 'react';
import { Shield, Zap, Cpu, Terminal, Compass, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTenet, setActiveTenet] = useState<number>(0);

  const tenets = [
    {
      icon: Zap,
      title: "Proactive Agency over Passive Polling",
      subtitle: "Autonomous Intervention",
      description:
        "Modern applications bombard users with notifications that get dismissed. I engineer autonomous agents that proactively wake up, evaluate urgency, and initiate two-way voice dialogues or workflows when it truly matters.",
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      highlight: "< 320ms Voice Turnaround on Lockscreen Calls"
    },
    {
      icon: Shield,
      title: "Resilient Real-Time Infrastructure",
      subtitle: "Sub-50ms Determinism",
      description:
        "Whether coordinating an urgent medical SOS over encrypted WebRTC or streaming bi-directional voice chunks, architectures must remain deterministic and sub-50ms responsive even across strict firewalls.",
      accent: "text-teal-cyber border-teal-cyber/30 bg-teal-cyber/10",
      highlight: "STUN/TURN Traverse Across Symmetric NATs"
    },
    {
      icon: Cpu,
      title: "Full-Spectrum System Depth",
      subtitle: "Silicon to Distributed Cloud",
      description:
        "True engineering excellence spans from silicon to cloud: firmware interrupts in FreeRTOS/ESP32, in-browser WebAssembly instruction emulation, up to enterprise NestJS microservices and relational data schemas.",
      accent: "text-orange-400 border-orange-500/30 bg-orange-500/10",
      highlight: "60 FPS Circuit Solver + Microcontroller Interpreters"
    },
  ];

  const fullSpectrumLayers = [
    { label: "Silicon & Firmware", desc: "ESP32, FreeRTOS, C/C++, Hardware Interrupts", progress: "95%", color: "bg-amber-400" },
    { label: "WASM Virtualization", desc: "Instruction Cycle Interpreters, In-Browser Emulation", progress: "92%", color: "bg-teal-cyber" },
    { label: "Distributed Backend", desc: "NestJS Microservices, PostgreSQL, Prisma, WebSockets", progress: "98%", color: "bg-orange-400" },
    { label: "Applied Intelligence", desc: "Duplex Voice Streaming (STT/TTS), Vector Memory, LLMs", progress: "94%", color: "bg-emerald-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-cyber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Compass size={13} />
            <span>// 01. FOUNDER &amp; ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Bridging Machine Learning, Real-Time Protocols &amp; Low-Level Design
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </motion.div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Biography Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 font-sans leading-relaxed border border-amber-500/15">
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2.5">
                <Terminal size={18} className="text-amber-400" />
                <span>The Founder's Journey</span>
              </h3>
              
              <p>
                As Founder and Lead Systems Architect at <strong className="text-amber-400">PRISMATIX4</strong>, I lead the technical vision and architectural engineering for our four-developer collective. My focus lies at the intersection where machine intelligence, real-time communication protocols (WebRTC/Socket.IO), and low-level system designs converge.
              </p>

              <p>
                Rather than treating software as disparate layers, I approach every product as a cohesive cyber-intelligence engine. From compiling cycle-accurate microcontroller emulators to WebAssembly, to architecting cross-platform assistive healthcare ecosystems with zero-lag P2P video, my engineering centers on building resilient systems that solve tangible problems.
              </p>

              {/* Core Philosophy Credo Card with Shimmer Border */}
              <div className="relative p-5 rounded-xl bg-obsidian-900 border-l-4 border-amber-400 border-r border-t border-b border-white/10 my-4 shadow-lg group">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1 font-semibold flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Core Engineering Credo</span>
                </span>
                <p className="text-lg font-medium text-white italic font-sans leading-snug">
                  "{PROFILE.philosophy}"
                </p>
              </div>

              <p className="text-sm text-slate-400">
                At PRISMATIX4, we believe that world-class software does not wait for a user to figure out complex workflows. It anticipates, adapts, and guarantees uptime under critical load.
              </p>
            </div>

            {/* Full-Spectrum Depth Visualizer */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Layers size={14} className="text-teal-cyber" />
                  <span>Full-Spectrum System Depth Gauge</span>
                </h4>
                <span className="text-[10px] font-mono text-amber-400">End-to-End Orchestration</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {fullSpectrumLayers.map((layer, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white font-medium">{layer.label}</span>
                      <span className="text-slate-400">{layer.desc}</span>
                    </div>
                    <div className="h-1.5 w-full bg-obsidian-950 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: layer.progress }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
                        className={`h-full ${layer.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Card & Tenets (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Founder Avatar & Stats Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-teal-cyber/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500/10 border-b border-l border-amber-500/20 text-[10px] font-mono text-amber-400 font-bold rounded-bl-xl">
                SYSTEMS ARCHITECT
              </div>

              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg relative bg-obsidian-850 p-0.5">
                    <img 
                      src="./ai_developer_avatar.png" 
                      alt="Sanjay S" 
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {PROFILE.name}
                    </h3>
                    <p className="text-xs font-mono text-amber-400">
                      Founder @ PRISMATIX4
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      Autonomous Agents &amp; Real-Time Systems
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/5 space-y-2 mb-4 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Core Specialty:</span>
                    <span className="text-white">Distributed Real-Time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Team Topology:</span>
                    <span className="text-amber-300">4-Node Collective</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Architecture Uptime:</span>
                    <span className="text-emerald-400 font-semibold">99.9% Production</span>
                  </div>
                </div>
              </div>

              <a
                href={PROFILE.links.prismatix4}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-teal-cyber/15 border border-teal-cyber/30 text-teal-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 hover:bg-teal-cyber/25 transition-colors"
              >
                <span>Explore PRISMATIX4 Hub</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Interactive 3 Core Engineering Tenets */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-1">
                // 3 Core Architectural Pillars
              </div>

              {tenets.map((tenet, idx) => {
                const Icon = tenet.icon;
                const isSelected = activeTenet === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTenet(idx)}
                    className={`glass-panel rounded-2xl p-5 border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-500/40 bg-obsidian-850 shadow-md'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${tenet.accent}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white font-sans">
                            {tenet.title}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400 block">
                            {tenet.subtitle}
                          </span>
                        </div>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`text-slate-500 transition-transform ${isSelected ? 'rotate-90 text-amber-400' : ''}`} 
                      />
                    </div>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pt-3 mt-3 border-t border-white/5 text-xs text-slate-300 leading-relaxed font-sans"
                        >
                          <p className="mb-2">{tenet.description}</p>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-950 text-[10px] font-mono text-amber-300 border border-amber-500/20">
                            <CheckCircle2 size={12} className="text-amber-400" />
                            <span>{tenet.highlight}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
