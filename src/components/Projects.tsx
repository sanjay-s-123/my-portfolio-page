import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (activeFilter === 'ai') return p.tech.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('llm'));
        if (activeFilter === 'realtime') return p.tech.some(t => t.toLowerCase().includes('webrtc') || t.toLowerCase().includes('socket') || t.toLowerCase().includes('audio'));
        if (activeFilter === 'hardware') return p.tech.some(t => t.toLowerCase().includes('esp32') || t.toLowerCase().includes('arduino') || t.toLowerCase().includes('webassembly'));
        if (activeFilter === 'fullstack') return p.tech.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('nestjs') || t.toLowerCase().includes('postgresql'));
        return true;
      });

  const filterTabs = [
    { id: 'all', label: 'All Flagship Systems' },
    { id: 'ai', label: 'Autonomous AI' },
    { id: 'realtime', label: 'Real-Time & WebRTC' },
    { id: 'hardware', label: 'Simulation & WASM' },
    { id: 'fullstack', label: 'Distributed Stack' },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glowing ambient light */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-teal-cyber/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <FolderGit2 size={13} />
            <span>// 03. FLAGSHIP PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Engineered Innovations &amp; Core Architectures
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Key systems engineered as Founder and Lead Systems Architect under the{' '}
            <a 
              href="https://prismatix4.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 underline underline-offset-4 font-semibold hover:text-amber-300"
            >
              PRISMATIX4
            </a>{' '}
            umbrella.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </motion.div>

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                    : 'bg-obsidian-850/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:border-white/15'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 4 Flagship Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/45 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Image Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-obsidian-950 border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-obsidian-900/90 border border-amber-500/35 text-amber-300 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {project.status}
                      </span>

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-obsidian-950/80 border border-white/10 backdrop-blur-md">
                        SYS_0{idx + 1}
                      </span>
                    </div>

                    {/* Role Pill over image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-obsidian-950/90 text-teal-cyber border border-teal-cyber/30 backdrop-blur-md flex items-center gap-1.5">
                        <Terminal size={12} />
                        <span>Role: {project.role}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-white font-sans group-hover:text-amber-300 transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/90 mb-3 font-medium">
                      "{project.tagline}"
                    </p>

                    {/* Summary */}
                    <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Metrics Bullet Badges */}
                    <div className="space-y-1.5 mb-5 p-3.5 rounded-xl bg-obsidian-950/60 border border-white/5 font-mono text-xs">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-obsidian-850 text-[11px] font-mono text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Card Footer */}
                <div className="px-6 py-4 bg-obsidian-950/80 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={project.attributionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
                  >
                    <span>{project.attribution}</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Deep-Dive Architectural Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/40 bg-[#090D14]/95 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedProject.status}
                </span>
                <span className="text-xs font-mono text-teal-cyber">
                  // {selectedProject.role}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-amber-400 mb-6">
                "{selectedProject.tagline}"
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cpu size={16} className="text-amber-400" />
                    <span>Architectural Implementation Breakdown</span>
                  </h4>
                  <ul className="space-y-2.5 font-sans text-xs text-slate-300">
                    {selectedProject.architectureDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-obsidian-950/60 border border-white/5">
                        <CheckCircle2 size={16} className="text-teal-cyber shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Technical Challenge */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <h5 className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                    <Sparkles size={14} />
                    <span>Key Engineering Challenge Solved</span>
                  </h5>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {selectedProject.keyChallenges}
                  </p>
                </div>

                {/* System Metrics */}
                <div>
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    // Validated System Metrics
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-xl bg-obsidian-850 border border-white/5 text-center">
                        <span className="text-xs font-mono text-amber-300 font-bold block">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attribution Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Engineered under PRISMATIX4
                  </span>
                  <a
                    href={selectedProject.attributionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 hover:text-amber-300"
                  >
                    <span>View on PRISMATIX4 Hub</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
