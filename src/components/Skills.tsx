import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Radio, 
  Database, 
  Smartphone, 
  Layers, 
  Check, 
  Sparkles,
  Bot
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const getCategoryIcon = (cat: SkillItem['category']) => {
    switch (cat) {
      case 'ai': return <Bot size={15} className="text-amber-400" />;
      case 'realtime': return <Radio size={15} className="text-teal-cyber" />;
      case 'backend': return <Database size={15} className="text-orange-400" />;
      case 'frontend': return <Smartphone size={15} className="text-emerald-400" />;
      case 'embedded': return <Cpu size={15} className="text-cyan-400" />;
      default: return <Layers size={15} className="text-amber-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    if (level === 'Architect') {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
          ARCHITECT
        </span>
      );
    }
    if (level === 'Expert' || level === 'Advanced') {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-teal-cyber/15 border border-teal-cyber/30 text-teal-300">
          ADVANCED
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-700/40 border border-slate-600/30 text-slate-300">
        PROFICIENT
      </span>
    );
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-obsidian-950/40">
      {/* Background ambient mesh */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-cyber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-cyber/10 border border-teal-cyber/20 text-xs font-mono text-teal-cyber mb-3">
            <Code2 size={13} />
            <span>// 02. TECHNICAL ARSENAL & SYSTEMS CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Categorized Engineering Matrix
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Battle-tested technologies deployed across production ecosystems, autonomous voice agents, and WebAssembly simulation runtimes.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-cyber to-transparent mt-3 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)] font-semibold'
                    : 'bg-obsidian-850/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:border-white/15'
                }`}
              >
                {isSelected && <Check size={13} className="text-amber-400" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-amber-500/35 transition-all group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-obsidian-850 border border-white/10 group-hover:border-amber-500/30 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="text-base font-bold text-white font-sans group-hover:text-amber-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-5">
                  {skill.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-obsidian-850 text-[10px] font-mono text-slate-400 border border-white/5 group-hover:border-amber-500/20 group-hover:text-slate-300 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arsenal Summary Telemetry Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-obsidian-850 via-obsidian-900 to-obsidian-850 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 text-slate-300">
            <Sparkles size={16} className="text-amber-400 animate-pulse" />
            <span>Architecture Stack Status: Verified Across Production Systems & Hardware Labs</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full-Duplex Audio</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-cyber" />
              <span>STUN/TURN Mesh</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>ESP32 WebAssembly</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
