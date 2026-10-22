import React from 'react';
import { 
  Users2, 
  ExternalLink, 
  Network, 
  Cpu, 
  Layers, 
  Server, 
  Globe2
} from 'lucide-react';
import { PRISMATIX4_INFO } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-obsidian-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Users2 size={13} />
            <span>// 04. LEADERSHIP & COLLECTIVE ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Founder of PRISMATIX4
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            {PRISMATIX4_INFO.statement}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* Collective Architecture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* 4 Nodes Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Node 1: Sanjay S */}
            <div className="glass-panel rounded-2xl p-5 border border-amber-500/35 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-xl bg-amber-500/20 border-l border-b border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
                FOUNDER / LEAD
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Network size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Sanjay S</h3>
              <p className="text-xs font-mono text-amber-400 mb-2">Systems Architect & Lead Dev</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Autonomous voice loops, WebRTC signaling mesh, WebAssembly virtualization, and cross-discipline integration.
              </p>
            </div>

            {/* Node 2: Distributed Backend */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4">
                <Server size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Distributed Backend</h3>
              <p className="text-xs font-mono text-orange-400 mb-2">Cloud Core & Database Mesh</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                NestJS microservices, ACID transaction reliability in PostgreSQL/Prisma, and fault-tolerant message brokers.
              </p>
            </div>

            {/* Node 3: Mobile & Frontend */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 group">
              <div className="w-10 h-10 rounded-xl bg-teal-cyber/10 border border-teal-cyber/30 flex items-center justify-center text-teal-cyber mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Mobile & Interfaces</h3>
              <p className="text-xs font-mono text-teal-cyber mb-2">Flutter & Modern Web</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Accessibility-first senior interfaces, multi-lingual localization, reactive Flutter clients, and design tokens.
              </p>
            </div>

            {/* Node 4: Machine Intelligence */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Machine Intelligence</h3>
              <p className="text-xs font-mono text-emerald-400 mb-2">Voice & Neural Pipelines</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Whisper STT model chunking, contextual vector retrieval, intent parsing, and streaming neural audio synthesis.
              </p>
            </div>

          </div>

          {/* Official Hub Direct CTA Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-amber-500/30 bg-gradient-to-b from-obsidian-900 to-obsidian-950 relative overflow-hidden group">
              
              {/* Background cyber grid */}
              <div className="absolute inset-0 opacity-15 pointer-events-none terminal-grid" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-mono text-amber-300">
                    <Globe2 size={13} />
                    <span>OFFICIAL HUB</span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-mono text-teal-cyber">
                    <span className="w-2 h-2 rounded-full bg-teal-cyber animate-ping" />
                    <span>prismatix4.vercel.app</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-sans mb-3">
                  Explore the PRISMATIX4 Official Hub
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  Discover our flagship systems, collective roadmap, and the complete portfolio of products engineered by our four-node collective.
                </p>

                <div className="space-y-2.5 p-4 rounded-xl bg-obsidian-950/80 border border-white/5 font-mono text-xs text-slate-400 mb-6">
                  <div className="flex items-center justify-between">
                    <span>Active Production Mesh:</span>
                    <span className="text-amber-400 font-semibold">Live on Vercel</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Engineering Collective:</span>
                    <span className="text-slate-200">PRISMATIX4 Core</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Systems Architect:</span>
                    <span className="text-teal-cyber font-medium">Sanjay S</span>
                  </div>
                </div>
              </div>

              {/* Direct Link Button */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <a
                  href={PRISMATIX4_INFO.hubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold font-sans text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] active:scale-95"
                >
                  <span>Launch PRISMATIX4 Official Hub</span>
                  <ExternalLink size={16} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
