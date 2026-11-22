import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Sparkles, 
  Heart, 
  ArrowDownRight, 
  RotateCcw, 
  MessageCircle,
  Volume2,
  VolumeX,
  Radio
} from 'lucide-react';
import { petAudio } from '../utils/petAudio';
import { 
  PROFILE, 
  PROJECTS, 
  SKILLS, 
  MILESTONES, 
  COLLECTIVE_NODES, 
  CERTIFICATIONS 
} from '../data/portfolioData';

type PetMood = 'idle' | 'happy' | 'thinking' | 'speaking' | 'love';
type VoiceMode = 'beeps' | 'voice' | 'muted';

interface ChatMessage {
  id: string;
  sender: 'pet' | 'user';
  text: string;
  action?: {
    label: string;
    href: string;
  };
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  sender: 'pet',
  text: "Bleep bloop! I'm **Byte**, Sanjay's AI companion! Ask me anything about his projects (SARA, SNAP, PhySense), tech stack, PRISMATIX4, or just give me headpats!",
};

const QUICK_PROMPTS = [
  { label: '🚀 Projects', query: 'Tell me about his flagship projects' },
  { label: '🧠 Tech Stack', query: 'What are his core technical skills?' },
  { label: '🌐 PRISMATIX4', query: 'Tell me about PRISMATIX4 and the team' },
  { label: '📬 Contact', query: 'How can I contact Sanjay?' },
  { label: '💖 Headpat Byte', query: '*pats head*' },
];

export const CyberPet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState<PetMood>('idle');
  const [voiceMode, setVoiceMode] = useState<VoiceMode>('beeps');
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const cycleVoiceMode = () => {
    setVoiceMode((prev) => {
      const next: VoiceMode = prev === 'beeps' ? 'voice' : prev === 'voice' ? 'muted' : 'beeps';
      if (next === 'muted') {
        petAudio.stopSpeech();
        setIsSpeakingAudio(false);
      } else {
        petAudio.playWakeBeep();
      }
      return next;
    });
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  // Hide initial floating greeting bubble after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingBubble(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const triggerHeartBurst = () => {
    const id = Date.now();
    setHearts((prev) => [...prev, id]);
    setMood('love');
    if (voiceMode !== 'muted') {
      petAudio.playHappyPurr();
    }
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h !== id));
      setMood('idle');
    }, 1500);
  };

  const generateResponse = (rawQuery: string): Omit<ChatMessage, 'id' | 'sender'> => {
    const q = rawQuery.toLowerCase().trim();

    // Cute / Headpat / Playful triggers
    if (q.includes('pat') || q.includes('cute') || q.includes('good boy') || q.includes('good girl') || q.includes('love')) {
      triggerHeartBurst();
      return {
        text: "Purrr~ *happy circuit noises* ⚡💛 Thank you! My neural cores are glowing at 100% happiness! Anything else you'd like to explore?"
      };
    }

    if (q === 'hi' || q === 'hello' || q === 'hey' || q.startsWith('hi ') || q.startsWith('hello ')) {
      setMood('happy');
      return {
        text: "Hey there, human! 👋 Welcome to Sanjay's architecture hub. I can walk you through his AI voice agents, WebRTC systems, or PRISMATIX4!"
      };
    }

    if (q.includes('who are you') || q.includes('your name') || q.includes('what are you')) {
      setMood('happy');
      return {
        text: "I'm **Byte**, an autonomous mini-companion living inside Sanjay's portfolio! I run on lightweight intent logic and know all about his engineering work."
      };
    }

    if (q.includes('joke')) {
      setMood('happy');
      return {
        text: "Why do distributed systems engineers prefer dark mode? Because light attracts too many bugs... and raises latency! 😄"
      };
    }

    if (q.includes('thank')) {
      setMood('love');
      return {
        text: "You're very welcome! Anytime you need help navigating Sanjay's systems, just boop my icon! ✨"
      };
    }

    // Specific Projects
    if (q.includes('sara')) {
      const sara = PROJECTS.find((p) => p.id === 'sara')!;
      setMood('speaking');
      return {
        text: `**${sara.title}**\n${sara.summary}\n\nKey Highlight: ${sara.metrics.join(' • ')}`,
        action: { label: 'Inspect SARA in Systems', href: '#projects' }
      };
    }

    if (q.includes('snap')) {
      const snap = PROJECTS.find((p) => p.id === 'snap')!;
      setMood('speaking');
      return {
        text: `**${snap.title}**\n${snap.summary}\n\nKey Highlight: ${snap.metrics.join(' • ')}`,
        action: { label: 'Inspect SNAP in Systems', href: '#projects' }
      };
    }

    if (q.includes('physense') || q.includes('hardware') || q.includes('wasm') || q.includes('simulation') || q.includes('esp32')) {
      const phy = PROJECTS.find((p) => p.id === 'physense')!;
      setMood('speaking');
      return {
        text: `**${phy.title}**\n${phy.summary}\n\nKey Highlight: ${phy.metrics.join(' • ')}`,
        action: { label: 'Inspect PhySense in Systems', href: '#projects' }
      };
    }

    if (q.includes('student') || q.includes('space')) {
      const stu = PROJECTS.find((p) => p.id === 'studentspace')!;
      setMood('speaking');
      return {
        text: `**${stu.title}**\n${stu.summary}\n\nKey Highlight: ${stu.metrics.join(' • ')}`,
        action: { label: 'Inspect Student Space', href: '#projects' }
      };
    }

    // General Projects
    if (q.includes('project') || q.includes('built') || q.includes('work') || q.includes('system')) {
      setMood('speaking');
      const list = PROJECTS.map((p) => `• **${p.title.split('—')[0].trim()}**: ${p.tagline}`).join('\n');
      return {
        text: `Sanjay has architected **4 flagship production systems** under PRISMATIX4:\n\n${list}`,
        action: { label: 'Jump to Systems Showcase', href: '#projects' }
      };
    }

    // Skills & Tech Stack
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('framework')) {
      setMood('speaking');
      const topSkills = SKILLS.filter((s) => s.level === 'Architect').map((s) => s.name).join(', ');
      return {
        text: `Sanjay's **Architect-level** mastery includes: ${topSkills}.\n\nHe spans AI/Voice Pipelines, WebRTC/Socket.IO, NestJS/PostgreSQL, Flutter/React, and ESP32/WebAssembly.`,
        action: { label: 'Explore Full Arsenal', href: '#skills' }
      };
    }

    // Specific skill search
    const matchedSkill = SKILLS.find(
      (s) =>
        q.includes(s.name.toLowerCase()) ||
        s.tags.some((t) => q.includes(t.toLowerCase()))
    );
    if (matchedSkill) {
      setMood('speaking');
      return {
        text: `Yes! Sanjay is **${matchedSkill.level}** in **${matchedSkill.name}**.\n${matchedSkill.description}`,
        action: { label: 'Filter in Technical Arsenal', href: '#skills' }
      };
    }

    // PRISMATIX4 & Team
    if (q.includes('prismatix') || q.includes('team') || q.includes('prithic') || q.includes('vasundara') || q.includes('vivina')) {
      setMood('speaking');
      const teamList = COLLECTIVE_NODES.map((n) => `• **${n.name}** — ${n.role}`).join('\n');
      return {
        text: `**PRISMATIX4** is the 4-engineer collective founded by Sanjay S:\n\n${teamList}`,
        action: { label: 'View Collective Topology', href: '#leadership' }
      };
    }

    // Experience / Milestones / Certifications
    if (q.includes('experience') || q.includes('milestone') || q.includes('cert') || q.includes('timeline') || q.includes('education')) {
      setMood('speaking');
      return {
        text: `Sanjay's trajectory includes **${MILESTONES.length} major architectural milestones** (2023–Present) and **${CERTIFICATIONS.length} specialized credentials** across Distributed Systems, Voice AI, and Embedded RTOS.`,
        action: { label: 'View Milestones Timeline', href: '#milestones' }
      };
    }

    // Contact / Hire / Email
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) {
      setMood('happy');
      return {
        text: `You can reach Sanjay directly at **${PROFILE.links.email}** or use the dispatch form! He responds within 24 hours.`,
        action: { label: 'Go to Contact Dispatch', href: '#contact' }
      };
    }

    // About / Who is Sanjay
    if (q.includes('sanjay') || q.includes('about') || q.includes('founder') || q.includes('philosophy')) {
      setMood('speaking');
      return {
        text: `**${PROFILE.name}** is the ${PROFILE.title}.\n\n"${PROFILE.philosophy}"\n\n${PROFILE.bio}`,
        action: { label: 'Read Engineering Philosophy', href: '#about' }
      };
    }

    // Fallback smart response
    setMood('happy');
    return {
      text: "Hmm, my mini-sensors aren't 100% sure about that one! Try asking me about **SARA**, **SNAP**, **PhySense**, **Skills**, **PRISMATIX4**, or **Contacting Sanjay** — or tap a quick topic below!"
    };
  };

  const sendMessage = (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setMood('thinking');

    if (voiceMode !== 'muted') {
      petAudio.playUserSendBlip();
      setTimeout(() => petAudio.playThinkingChirps(), 120);
    }

    setTimeout(() => {
      const replyData = generateResponse(trimmed);
      const petMsg: ChatMessage = {
        id: `pet-${Date.now()}`,
        sender: 'pet',
        ...replyData,
      };
      setMessages((prev) => [...prev, petMsg]);
      setIsTyping(false);

      if (voiceMode === 'beeps') {
        petAudio.playRoboticSpeakCadence();
        setIsSpeakingAudio(true);
        setTimeout(() => setIsSpeakingAudio(false), 600);
      } else if (voiceMode === 'voice') {
        petAudio.playRoboticSpeakCadence();
        petAudio.speakText(
          replyData.text,
          () => setIsSpeakingAudio(true),
          () => setIsSpeakingAudio(false)
        );
      }

      setTimeout(() => {
        setMood((prev) => (prev === 'love' ? 'love' : 'idle'));
      }, 2000);
    }, 420);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleActionClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Format bold **text** cleanly in chat bubbles
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, lIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={lIdx} className="block min-h-[1em]">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="text-amber-300 font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <React.Fragment key={pIdx}>{part}</React.Fragment>;
          })}
        </span>
      );
    });
  };

  // Cute Expressive SVG Pet Avatar
  const PetAvatar = ({ size = 54 }: { size?: number }) => (
    <motion.div
      animate={
        mood === 'love'
          ? { y: [0, -6, 0], rotate: [0, -6, 6, 0] }
          : mood === 'thinking'
          ? { rotate: [-4, 4, -4] }
          : { y: [0, -4, 0] }
      }
      transition={{
        duration: mood === 'love' ? 0.5 : 3.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_0_14px_rgba(245,158,11,0.45)]"
      >
        {/* Cute Cat/Robo Ears */}
        <motion.path
          d="M 22 36 L 16 12 L 40 24 Z"
          fill="#111827"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinejoin="round"
          animate={mood === 'happy' || mood === 'love' ? { rotate: [-3, 3, -3] } : {}}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        <motion.path
          d="M 78 36 L 84 12 L 60 24 Z"
          fill="#111827"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinejoin="round"
          animate={mood === 'happy' || mood === 'love' ? { rotate: [3, -3, 3] } : {}}
          transition={{ duration: 0.6, repeat: Infinity }}
        />

        {/* Inner Ear Glow */}
        <path d="M 24 31 L 20 18 L 34 25 Z" fill="#06B6D4" opacity="0.8" />
        <path d="M 76 31 L 80 18 L 66 25 Z" fill="#06B6D4" opacity="0.8" />

        {/* Little Top Antenna */}
        <line x1="50" y1="20" x2="50" y2="8" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="7" r="4" fill="#F59E0B" />

        {/* Rounded Head Chassis */}
        <rect
          x="14"
          y="22"
          width="72"
          height="62"
          rx="26"
          fill="#0D111A"
          stroke="#F59E0B"
          strokeWidth="3.5"
        />

        {/* Visor Screen */}
        <rect
          x="22"
          y="33"
          width="56"
          height="38"
          rx="16"
          fill="#05080E"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />

        {/* Dynamic Expressions */}
        {mood === 'love' || mood === 'happy' ? (
          <>
            {/* Happy ^ ^ Eyes */}
            <path
              d="M 31 50 Q 37 42 43 50"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 57 50 Q 63 42 69 50"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Cute Blush */}
            <ellipse cx="29" cy="57" rx="4" ry="2.2" fill="#F97316" opacity="0.6" />
            <ellipse cx="71" cy="57" rx="4" ry="2.2" fill="#F97316" opacity="0.6" />
          </>
        ) : mood === 'thinking' ? (
          <>
            {/* Thinking Looking Up/Side Eyes */}
            <circle cx="38" cy="46" r="4.5" fill="#06B6D4" />
            <circle cx="64" cy="46" r="4.5" fill="#06B6D4" />
            <circle cx="39" cy="44" r="1.5" fill="#FFFFFF" />
            <circle cx="65" cy="44" r="1.5" fill="#FFFFFF" />
          </>
        ) : (
          <>
            {/* Cute Blinking Normal Eyes */}
            <motion.ellipse
              cx="37"
              cy="49"
              rx="4.8"
              ry="6"
              fill="#F59E0B"
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
            />
            <motion.ellipse
              cx="63"
              cy="49"
              rx="4.8"
              ry="6"
              fill="#F59E0B"
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
            />
            {/* Eye Sparkles */}
            <circle cx="35.5" cy="46.5" r="1.8" fill="#FFFFFF" />
            <circle cx="61.5" cy="46.5" r="1.8" fill="#FFFFFF" />
            {/* Soft Blush */}
            <ellipse cx="29" cy="57" rx="3.5" ry="2" fill="#06B6D4" opacity="0.35" />
            <ellipse cx="71" cy="57" rx="3.5" ry="2" fill="#06B6D4" opacity="0.35" />
          </>
        )}

        {/* Cute Mouth */}
        {mood === 'thinking' ? (
          <line x1="45" y1="60" x2="55" y2="60" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
        ) : mood === 'speaking' ? (
          <motion.ellipse
            cx="50"
            cy="60"
            rx="4"
            ry="3"
            fill="#F59E0B"
            animate={{ ry: [1.5, 3.5, 1.5] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          />
        ) : (
          <path
            d="M 44 58 Q 47 62 50 58 Q 53 62 56 58"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        )}
      </svg>

      {/* Floating Hearts on Headpat */}
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h}
            initial={{ opacity: 1, y: 0, scale: 0.6 }}
            animate={{ opacity: 0, y: -38, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute -top-3 text-amber-400 pointer-events-none"
          >
            <Heart size={16} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="mb-3 w-[340px] sm:w-[390px] max-h-[520px] flex flex-col rounded-2xl bg-[#090D14]/95 backdrop-blur-2xl border border-amber-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden"
          >
            {/* Chat Header */}
            <div className="px-4 py-3 bg-obsidian-850/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  onClick={triggerHeartBurst}
                  className="cursor-pointer"
                  title="Click to pat Byte!"
                >
                  <PetAvatar size={40} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold font-sans text-sm text-white">Byte</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      AI PET
                    </span>
                    {/* Live Audio Waveform Visualizer */}
                    {isSpeakingAudio && (
                      <div className="flex items-end gap-[2px] h-3 ml-1" aria-hidden="true">
                        <motion.span animate={{ height: ['4px', '12px', '4px'] }} transition={{ duration: 0.35, repeat: Infinity }} className="w-[2px] bg-teal-cyber rounded-full" />
                        <motion.span animate={{ height: ['8px', '4px', '11px'] }} transition={{ duration: 0.3, repeat: Infinity }} className="w-[2px] bg-amber-400 rounded-full" />
                        <motion.span animate={{ height: ['5px', '12px', '5px'] }} transition={{ duration: 0.4, repeat: Infinity }} className="w-[2px] bg-teal-cyber rounded-full" />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {isTyping ? 'Processing...' : isSpeakingAudio ? 'Transmitting Audio...' : mood === 'love' ? 'Happy & Purring!' : 'Online • Voice Ready'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Voice Mode Switcher */}
                <button
                  onClick={cycleVoiceMode}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1 border transition-colors ${
                    voiceMode === 'muted'
                      ? 'text-slate-500 border-white/5 hover:text-slate-300'
                      : voiceMode === 'voice'
                      ? 'text-teal-300 bg-teal-cyber/15 border-teal-cyber/30'
                      : 'text-amber-300 bg-amber-500/15 border-amber-500/30'
                  }`}
                  title="Switch audio mode: Beeps / Voice + Beeps / Muted"
                  aria-label="Toggle Byte voice mode"
                >
                  {voiceMode === 'muted' ? (
                    <VolumeX size={13} />
                  ) : voiceMode === 'voice' ? (
                    <Radio size={13} className="animate-pulse" />
                  ) : (
                    <Volume2 size={13} />
                  )}
                  <span className="hidden sm:inline capitalize">{voiceMode}</span>
                </button>

                <button
                  onClick={() => {
                    petAudio.stopSpeech();
                    setIsSpeakingAudio(false);
                    setMessages([INITIAL_MESSAGE]);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-white/5 transition-colors"
                  title="Reset conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => {
                    petAudio.stopSpeech();
                    setIsSpeakingAudio(false);
                    setIsOpen(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Minimize Byte"
                  aria-label="Minimize chat"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs font-sans max-h-[310px]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-obsidian-950 font-medium rounded-br-sm'
                        : 'bg-obsidian-850/90 border border-white/10 text-slate-200 rounded-bl-sm'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* Optional Quick Navigation Action inside Pet Bubble */}
                  {msg.action && (
                    <button
                      onClick={() => handleActionClick(msg.action!.href)}
                      className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-cyber/15 border border-teal-cyber/30 text-[11px] font-mono text-teal-300 hover:bg-teal-cyber/25 transition-colors"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowDownRight size={12} />
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-obsidian-850/90 border border-white/10 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 border-t border-white/5 bg-obsidian-950/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(qp.query)}
                  className="shrink-0 px-2.5 py-1 rounded-lg bg-obsidian-850 border border-white/10 hover:border-amber-500/40 text-[11px] font-mono text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {qp.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-obsidian-900 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Byte about Sanjay..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-xs font-sans text-white placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-obsidian-950 hover:from-amber-400 hover:to-orange-400 disabled:opacity-40 transition-all shadow-md"
                aria-label="Send message to Byte"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Floating Pet Launcher */}
      <div className="relative flex items-center gap-3">
        {/* Optional Floating Speech Bubble Prompt */}
        <AnimatePresence>
          {!isOpen && showGreetingBubble && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-850/95 border border-amber-500/35 shadow-xl cursor-pointer hover:border-amber-400 transition-colors"
            >
              <Sparkles size={13} className="text-amber-400 shrink-0" />
              <span className="text-xs font-mono text-slate-200">
                Hi! I'm <strong className="text-amber-300">Byte</strong>. Chat with me!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pet Launcher Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            const nextOpen = !isOpen;
            setIsOpen(nextOpen);
            setShowGreetingBubble(false);
            if (nextOpen && voiceMode !== 'muted') {
              petAudio.playWakeBeep();
            } else if (!nextOpen) {
              petAudio.stopSpeech();
              setIsSpeakingAudio(false);
            }
          }}
          className="relative w-16 h-16 rounded-2xl bg-obsidian-850/90 backdrop-blur-xl border border-amber-500/40 shadow-[0_8px_30px_rgba(245,158,11,0.28)] hover:border-amber-400 flex items-center justify-center group transition-colors"
          aria-label="Toggle Byte AI Pet Chat"
        >
          <PetAvatar size={48} />

          {/* Tiny Chat Indicator Dot */}
          {!isOpen && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-teal-cyber text-obsidian-950 flex items-center justify-center shadow-md border border-obsidian-950">
              <MessageCircle size={11} strokeWidth={2.5} />
            </span>
          )}
        </motion.button>
      </div>

    </div>
  );
};
