import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Shield, 
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glowing glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <FolderGit2 size={13} />
            <span>// 03. FLAGSHIP PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Engineered Innovations & Core Architectures
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Key systems engineered as Founder and Lead Systems Architect under the <a href="https://prismatix4.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline underline-offset-4 font-semibold">PRISMATIX4</a> umbrella.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* 4 Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl"
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
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-obsidian-900/90 border border-amber-500/30 text-amber-300 backdrop-blur-md">
                      {project.status}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-obsidian-950/80 border border-white/10 backdrop-blur-md">
                      SYS_0{idx + 1}
                    </span>
                  </div>

                  {/* Role Pill over image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-obsidian-950/90 text-teal-cyber border border-teal-cyber/30 backdrop-blur-md">
                      Role: {project.role}
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

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
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

              {/* Card Footer: Attribution & Deep Dive Trigger */}
              <div className="p-6 pt-0 border-t border-white/5 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Legal Attribution Badge */}
                <a
                  href={project.attributionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400/90 hover:text-amber-300 group/link"
                >
                  <Shield size={12} className="text-amber-400" />
                  <span className="underline underline-offset-2">{project.attribution}</span>
                  <ExternalLink size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>

                {/* Deep Dive Modal Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-obsidian-850 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 text-xs font-mono text-slate-200 hover:text-amber-300 transition-all cursor-pointer"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowRight size={13} />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Spring Animated Modal (Framer Motion) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-obsidian-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 bg-obsidian-950 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                    <span>SYS_ARCHITECTURE_REPORT</span>
                    <span>//</span>
                    <span className="text-teal-cyber">{selectedProject.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-obsidian-850 border border-white/10 text-slate-400 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Close architecture report"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans text-sm">
                
                {/* Role and Attribution Callout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-obsidian-850 border border-amber-500/20 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1">Founder Role:</span>
                    <span className="text-amber-300 font-bold">{selectedProject.role}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">Collective Attribution:</span>
                    <a
                      href={selectedProject.attributionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-cyber hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>{selectedProject.attribution}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Activity size={14} className="text-teal-cyber" />
                    <span>Architectural Telemetry & Metrics</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-lg bg-obsidian-850/80 border border-white/5 font-mono text-xs text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Cpu size={14} className="text-amber-400" />
                    <span>Key Engineering Breakthroughs</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.architectureDetails.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-obsidian-850/60 border border-white/5 flex items-start gap-3"
                      >
                        <span className="text-amber-400 font-mono text-xs mt-0.5 font-bold">
                          0{dIdx + 1}.
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Challenges Solved */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25">
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <Sparkles size={14} />
                    <span>Core Technical Challenge Overcome</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-sans">
                    {selectedProject.keyChallenges}
                  </p>
                </div>

                {/* Tech Pills */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Full System Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-obsidian-850 border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-obsidian-950 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <a
                  href={selectedProject.attributionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1.5"
                >
                  <span>View Project on PRISMATIX4 Hub</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-slate-200 transition-colors"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
