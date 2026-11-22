import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Radio, 
  Database, 
  Smartphone, 
  Layers, 
  Check, 
  Search, 
  Bot, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS, SKILL_CATEGORIES, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = 
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 border border-amber-500/35 text-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.2)]">
          ARCHITECT
        </span>
      );
    }
    if (level === 'Expert' || level === 'Advanced') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-cyber/15 border border-teal-cyber/35 text-teal-300 shadow-[0_0_8px_rgba(6,182,212,0.2)]">
          ADVANCED
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-700/40 border border-slate-600/30 text-slate-300">
        PROFICIENT
      </span>
    );
  };

  const getProficiencyPercentage = (level: string) => {
    if (level === 'Architect') return '98%';
    if (level === 'Expert' || level === 'Advanced') return '90%';
    return '80%';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-obsidian-950/40">
      {/* Background ambient mesh */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-cyber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-cyber/10 border border-teal-cyber/20 text-xs font-mono text-teal-cyber mb-3">
            <Code2 size={13} />
            <span>// 02. TECHNICAL ARSENAL &amp; SYSTEMS CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Categorized Engineering Matrix
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Battle-tested technologies deployed across production ecosystems, autonomous voice agents, and WebAssembly simulation runtimes.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-cyber to-transparent mt-3 rounded-full" />
        </motion.div>

        {/* Filter & Live Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'text-amber-300 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 bg-obsidian-850/60 border border-white/5'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 bg-amber-500/15 border border-amber-500/40 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isSelected && <Check size={12} className="text-amber-400" />}
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Instant Search Input */}
          <div className="relative min-w-[240px]">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech (e.g. WebRTC, NestJS)..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-obsidian-900 border border-white/10 focus:border-amber-400/50 focus:outline-none text-xs font-mono text-slate-200 placeholder-slate-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={13} />
              </button>
            )}
          </div>

        </div>

        {/* Skills Grid with Smooth Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-obsidian-850 border border-white/10 group-hover:border-amber-500/30 transition-colors">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <h3 className="font-bold text-white text-base font-sans group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    {getLevelBadge(skill.level)}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Subtle Mastery Depth Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                      <span>Depth / Mastery</span>
                      <span className="text-amber-400 font-semibold">{getProficiencyPercentage(skill.level)}</span>
                    </div>
                    <div className="h-1 w-full bg-obsidian-950 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" 
                        style={{ width: getProficiencyPercentage(skill.level) }} 
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {skill.tags.map((tag, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => setSearchQuery(tag)}
                        className="px-2 py-0.5 rounded-md bg-obsidian-950 text-[10px] font-mono text-slate-400 border border-white/5 hover:text-amber-300 hover:border-amber-500/30 transition-colors cursor-pointer"
                        title={`Filter by #${tag}`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Feedback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-white/10">
            <p className="text-sm font-mono text-slate-400 mb-2">No engineering skills match "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs font-mono text-amber-400 hover:underline"
            >
              Reset filters &amp; view all
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
