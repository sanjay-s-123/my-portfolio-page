import React, { useState } from 'react';
import { 
  Users2, 
  ExternalLink, 
  Network, 
  Cpu, 
  Layers, 
  Server, 
  Globe2, 
  ArrowUpRight, 
  Bot
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PRISMATIX4_INFO, COLLECTIVE_NODES, CollectiveNode } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<CollectiveNode>(COLLECTIVE_NODES[0]);

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'sanjay': return <Network size={20} className="text-amber-400" />;
      case 'prithic': return <Server size={20} className="text-sky-400" />;
      case 'vasundara': return <Layers size={20} className="text-emerald-400" />;
      case 'vivina': return <Bot size={20} className="text-amber-300" />;
      default: return <Cpu size={20} className="text-amber-400" />;
    }
  };

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-obsidian-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-cyber/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Users2 size={13} />
            <span>// 05. LEADERSHIP &amp; COLLECTIVE ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Founder of PRISMATIX4
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            {PRISMATIX4_INFO.statement}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </motion.div>

        {/* Collective Architecture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* 4 Nodes Interactive Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COLLECTIVE_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <motion.div
                  key={node.id}
                  whileHover={{ y: -3 }}
                  onClick={() => setSelectedNode(node)}
                  className={`glass-panel rounded-2xl p-5 border cursor-pointer relative overflow-hidden transition-all ${
                    isSelected
                      ? 'border-amber-500/50 bg-obsidian-850 shadow-xl'
                      : 'border-white/10 hover:border-white/25'
                  }`}
                  style={{
                    boxShadow: isSelected ? `0 10px 30px -10px ${node.glow}` : undefined
                  }}
                >
                  {/* Top Badge */}
                  <div 
                    className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-xl text-[9px] font-mono font-bold border-l border-b"
                    style={{
                      backgroundColor: `${node.color}18`,
                      borderColor: `${node.color}40`,
                      color: node.color
                    }}
                  >
                    {node.badge}
                  </div>

                  <div 
                    className="w-10 h-10 rounded-xl border flex items-center justify-center mb-4 transition-colors"
                    style={{
                      backgroundColor: `${node.color}15`,
                      borderColor: `${node.color}35`,
                    }}
                  >
                    {getNodeIcon(node.id)}
                  </div>

                  <h3 className="text-base font-bold text-white font-sans flex items-center gap-1.5">
                    <span>{node.name}</span>
                    {node.portfolioUrl !== '#home' && (
                      <a 
                        href={node.portfolioUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 hover:text-white"
                        title="View Portfolio"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </h3>

                  <p 
                    className="text-xs font-mono mb-2"
                    style={{ color: node.color }}
                  >
                    {node.role}
                  </p>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {node.specialty}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Node Status:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Official Hub Direct CTA & Active Node Radar (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-amber-500/30 bg-gradient-to-b from-obsidian-900 to-obsidian-950 relative overflow-hidden group">
              
              {/* Background cyber grid */}
              <div className="absolute inset-0 opacity-15 pointer-events-none terminal-grid" />

              <div className="relative z-10 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-amber-400 font-semibold">
                    <Globe2 size={14} className="animate-spin-slow" />
                    <span>CENTRAL COLLECTIVE PORTAL</span>
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-white">
                    The PRISMATIX4 Philosophy
                  </h3>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed mt-2">
                    Four specialized engineers. One unified collective. Bridging low-level systems architecture, high-concurrency cloud backends, accessible human ergonomics, and applied machine learning into complete, production-grade applications.
                  </p>
                </div>

                {/* Selected Node Telemetry Spotlight */}
                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/10 space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Active Node Selected:</span>
                    <span className="font-bold text-white">{selectedNode.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pillar Role:</span>
                    <span style={{ color: selectedNode.color }}>{selectedNode.role}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Live Dedicated Domain:</span>
                    {selectedNode.portfolioUrl === '#home' ? (
                      <span className="text-amber-400 font-semibold">Current Portfolio</span>
                    ) : (
                      <a 
                        href={selectedNode.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-cyber underline hover:text-white flex items-center gap-1"
                      >
                        <span>Visit Portfolio</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Technical Pillars Summary */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    // Collective Engineering Disciplines
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {PRISMATIX4_INFO.pillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-lg bg-obsidian-850/80 border border-white/5">
                        <span className="text-white font-bold block">{pillar.title}</span>
                        <span className="text-[10px] text-slate-400">{pillar.lead}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button to PRISMATIX4 */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                <a
                  href={PRISMATIX4_INFO.hubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-obsidian-950 font-bold font-sans text-xs hover:from-amber-400 hover:to-orange-400 hover:shadow-[0_0_24px_rgba(245,158,11,0.4)] transition-all transform active:scale-95"
                >
                  <Globe2 size={15} />
                  <span>Launch Official PRISMATIX4 Platform Hub</span>
                  <ExternalLink size={13} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
