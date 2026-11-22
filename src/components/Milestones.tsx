import React, { useState } from 'react';
import { Milestone, CheckCircle2, Sparkles, Trophy, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MILESTONES, CERTIFICATIONS } from '../data/portfolioData';

export const Milestones: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  return (
    <section id="milestones" className="py-24 relative overflow-hidden bg-obsidian-950/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <Milestone size={13} />
            <span>// 04. EXPERIENCE &amp; ARCHITECTURAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Engineering Timeline &amp; Credentials
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            A chronological progression of architectural milestones, systems leadership, and specialized technical mastery.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </motion.div>

        {/* Timeline & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          
          {/* Left Column: Interactive Milestone Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">
              // Trajectory Timeline
            </div>

            {MILESTONES.map((item, idx) => {
              const isSelected = activeMilestone === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  onClick={() => setActiveMilestone(idx)}
                  className={`glass-panel rounded-2xl p-4 sm:p-5 border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-amber-500/50 bg-obsidian-850 shadow-lg shadow-amber-500/10'
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-amber-400 font-semibold">
                          {item.period}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-white/5 text-slate-300 border border-white/10">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white font-sans">
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        {item.entity}
                      </p>
                    </div>

                    <ChevronRight 
                      size={18} 
                      className={`text-slate-500 transition-transform mt-1 shrink-0 ${isSelected ? 'text-amber-400 rotate-90 sm:rotate-0' : ''}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Active Milestone Deep-Dive Card (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-semibold block mb-1">
                    {MILESTONES[activeMilestone].period} • {MILESTONES[activeMilestone].badge}
                  </span>
                  <h3 className="text-2xl font-bold font-sans text-white">
                    {MILESTONES[activeMilestone].role}
                  </h3>
                  <p className="text-sm font-mono text-teal-cyber mt-1">
                    {MILESTONES[activeMilestone].entity}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                {MILESTONES[activeMilestone].description}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <Sparkles size={13} className="text-amber-400" />
                  <span>Key Architectural Deliverables</span>
                </h4>
                <div className="space-y-2 font-mono text-xs text-slate-300">
                  {MILESTONES[activeMilestone].highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  // Technologies Orchestrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {MILESTONES[activeMilestone].technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Certifications & Specialized Credentials Showcase */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy size={16} className="text-amber-400" />
            <h3 className="text-xl font-bold text-white font-sans">
              Specialized Architectural Certifications &amp; Domains
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * cIdx }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans mb-1 group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-teal-cyber mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
