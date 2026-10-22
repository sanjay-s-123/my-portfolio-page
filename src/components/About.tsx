import React from 'react';
import { Shield, Zap, Cpu, Terminal, ArrowUpRight, Compass, Award } from 'lucide-react';
import { PROFILE, PRISMATIX4_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const tenets = [
    {
      icon: Zap,
      title: "Proactive Agency over Passive Polling",
      description:
        "Modern applications bombard users with notifications that get dismissed. I engineer autonomous agents that proactively wake up, evaluate urgency, and initiate two-way voice dialogues or workflows when it truly matters.",
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      icon: Shield,
      title: "Resilient Real-Time Infrastructure",
      description:
        "Whether coordinating an urgent medical SOS over encrypted WebRTC or streaming bi-directional voice chunks, architectures must remain deterministic and sub-50ms responsive even across strict firewalls.",
      accent: "text-teal-cyber border-teal-cyber/30 bg-teal-cyber/10",
    },
    {
      icon: Cpu,
      title: "Full-Spectrum System Depth",
      description:
        "True engineering excellence spans from silicon to cloud: firmware interrupts in FreeRTOS/ESP32, in-browser WebAssembly instruction emulation, up to enterprise NestJS microservices and relational data schemas.",
      accent: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Compass size={13} />
            <span>// 01. FOUNDER & ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Bridging Machine Learning, Real-Time Protocols & Low-Level Design
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Biography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
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

              {/* Core Philosophy Quote Card */}
              <div className="p-5 rounded-xl bg-obsidian-900 border-l-4 border-amber-400 border-r border-t border-b border-white/5 my-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  Core Engineering Credo
                </span>
                <p className="text-lg font-medium text-white italic font-sans">
                  "{PROFILE.philosophy}"
                </p>
              </div>

              <p className="text-sm text-slate-400">
                At PRISMATIX4, we believe that world-class software does not wait for a user to figure out complex workflows. It anticipates, adapts, and guarantees uptime under critical load.
              </p>
            </div>
          </div>

          {/* Profile Card & Architecture Milestones (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-teal-cyber/20">
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg relative bg-obsidian-850">
                    <img 
                      src="./ai_developer_avatar.png" 
                      alt="Sanjay S" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if missing
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-sans">{PROFILE.name}</h4>
                    <p className="text-xs font-mono text-amber-400">{PROFILE.title}</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Base: India • Real-Time Systems</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 font-mono text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Official Collective:</span>
                    <a 
                      href={PRISMATIX4_INFO.hubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>PRISMATIX4 Tech Hub</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Collective Composition:</span>
                    <span className="text-slate-200">4 Core Engineering Leads</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Core Specialty:</span>
                    <span className="text-teal-cyber font-medium">Real-Time & Autonomous AI</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-400">Architecture Discipline:</span>
                    <span className="text-slate-200">Full-Stack & Embedded IoT</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-cyber">
                  <Award size={14} />
                  <span>Founding Systems Architect</span>
                </span>
                <span className="text-slate-400">Active Node 2026</span>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Engineering Tenets Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-amber-500/40 transition-all group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${tenet.accent}`}>
                    <Icon size={22} />
                  </div>
                  <h4 className="text-base font-bold text-white font-sans mb-3 group-hover:text-amber-300 transition-colors">
                    {tenet.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    {tenet.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-amber-500/70 group-hover:text-amber-400 transition-colors">VERIFIED_SPEC</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
