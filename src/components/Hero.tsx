import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Terminal as TerminalIcon, 
  Radio, 
  Cpu, 
  Activity, 
  ShieldCheck,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'webrtc' | 'agent'>('telemetry');
  const [pingCount, setPingCount] = useState(14);
  const [latency, setLatency] = useState(24);
  const [isPinging, setIsPinging] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

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
      setLatency(Math.floor(Math.random() * 12) + 18);
      setPingCount(prev => prev + 1);
      setIsPinging(false);
    }, 400);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-cyber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-6 text-xs font-mono font-semibold text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>// FOUNDER & FULL-STACK SYSTEMS ARCHITECT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans leading-[1.12] mb-6">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 glow-amber-text">Autonomous Systems</span> from Idea to Production.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed mb-4 max-w-2xl">
              Founder of <a href={PROFILE.links.prismatix4} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 decoration-amber-500/40">PRISMATIX4</a>. 
              Building proactive voice AI agents, real-time WebRTC care ecosystems, and embedded simulation engines.
            </p>

            <p className="text-sm text-slate-400 font-mono mb-8 max-w-2xl leading-relaxed flex items-center gap-2">
              <span className="text-teal-cyber">❯</span> 
              <span>Bridging high-concurrency microservices, machine learning pipelines, and low-level firmware.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-obsidian-950 font-bold font-sans text-sm hover:from-amber-400 hover:to-orange-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all transform active:scale-95"
              >
                <span>Explore Engineered Systems</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={PROFILE.links.prismatix4}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian-850/80 border border-amber-500/30 text-slate-200 font-mono text-xs hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/5 transition-all"
              >
                <span>Visit PRISMATIX4 Official</span>
                <ExternalLink size={14} />
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-850/80 border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-850/80 border border-white/10 text-slate-400 hover:text-teal-cyber hover:border-teal-cyber/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/5 font-mono">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-100">{stat.value}</span>
                  <span className="text-xs text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Terminal / Telemetry Visual (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-amber-500/30 bg-obsidian-900/90 shadow-2xl overflow-hidden backdrop-blur-xl relative group hover:border-amber-400/50 transition-all">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-obsidian-950/80 border-b border-white/10 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500/80" />
                  </div>
                  <span className="text-slate-400 ml-2 font-medium">terminal://node-sanjay.p4</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-teal-cyber">
                  <Activity size={12} className="animate-spin" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Tab Selector */}
              <div className="flex border-b border-white/5 bg-obsidian-850/50 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`flex-1 py-2 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'telemetry'
                      ? 'text-amber-400 bg-amber-500/10 border-b-2 border-amber-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu size={12} />
                  <span>telemetry.sys</span>
                </button>
                <button
                  onClick={() => setActiveTab('webrtc')}
                  className={`flex-1 py-2 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'webrtc'
                      ? 'text-teal-cyber bg-teal-cyber/10 border-b-2 border-teal-cyber font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Radio size={12} />
                  <span>webrtc.mesh</span>
                </button>
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`flex-1 py-2 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'agent'
                      ? 'text-orange-400 bg-orange-500/10 border-b-2 border-orange-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TerminalIcon size={12} />
                  <span>agent.core</span>
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4 min-h-[300px] terminal-grid text-slate-300">
                
                {/* Meta status info */}
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5 text-[11px]">
                  <span>NODE_ID: P4-ARC-01</span>
                  <span>TIME: {currentTime || 'SYNCING...'}</span>
                </div>

                {activeTab === 'telemetry' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Core Runtime:</span>
                      <span className="text-amber-400 font-semibold">NestJS + WebAssembly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Mesh Latency:</span>
                      <span className="text-teal-cyber font-semibold">{latency} ms (Nominal)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Active Nodes:</span>
                      <span className="text-slate-200">4 Collective Systems Online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Memory Allocation:</span>
                      <span className="text-slate-200">142MB / 512MB (Optimal)</span>
                    </div>
                    
                    {/* Visual Progress Bar */}
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>CPU THREAD LOAD</span>
                        <span className="text-amber-400">28.4%</span>
                      </div>
                      <div className="w-full h-1.5 bg-obsidian-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-cyber to-amber-400 rounded-full w-[28%]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'webrtc' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">P2P Signaling:</span>
                      <span className="text-teal-cyber flex items-center gap-1 font-semibold">
                        <CheckCircle2 size={12} /> ESTABLISHED
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Relay Strategy:</span>
                      <span className="text-slate-200">Direct STUN / TURN Fallback</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Video Pipeline:</span>
                      <span className="text-amber-400">H.264 / VP8 Hardware Enc</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Encryption:</span>
                      <span className="text-teal-cyber">DTLS-SRTP (256-bit)</span>
                    </div>
                    <div className="p-2.5 rounded bg-obsidian-950/80 border border-teal-cyber/20 text-[11px] text-teal-300">
                      $ snap-relay --mode=caregiver-sos --status=active
                    </div>
                  </div>
                )}

                {activeTab === 'agent' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Voice Pipeline:</span>
                      <span className="text-orange-400 font-semibold">Whisper STT Stream</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Native Lockscreen:</span>
                      <span className="text-teal-cyber flex items-center gap-1">
                        <ShieldCheck size={12} /> CallKit Enabled
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Proactive Loop:</span>
                      <span className="text-amber-400">Circadian Decision Engine</span>
                    </div>
                    <div className="p-2.5 rounded bg-obsidian-950/80 border border-amber-500/20 text-[11px] text-amber-300">
                      $ sara-agent --dispatch-call --target="check-in"
                    </div>
                  </div>
                )}

                {/* Interactive ping trigger */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={triggerPing}
                    disabled={isPinging}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] transition-all disabled:opacity-50"
                  >
                    <RefreshCw size={11} className={isPinging ? 'animate-spin' : ''} />
                    <span>{isPinging ? 'Pinging Node...' : 'Ping Telemetry Node'}</span>
                  </button>
                  <span className="text-[10px] text-slate-500">packets sent: {pingCount}</span>
                </div>

              </div>

              {/* Bottom scanline accent */}
              <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-teal-cyber to-orange-500 opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
