import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  Terminal,
  ShieldCheck,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const quickTopics = [
    "Autonomous Voice AI Consultation",
    "Real-Time WebRTC Architecture",
    "PRISMATIX4 Project Collaboration",
    "Embedded Hardware & WASM"
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectTopic = (topic: string) => {
    setFormData(prev => ({
      ...prev,
      subject: topic
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      // Credentials not yet configured in .env
      setStatus('error');
      setErrorMessage(
        'EmailJS credentials are not configured yet in .env (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY). Please add your keys or click below to launch your email client.'
      );
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#06B6D4', '#10B981']
        });

        setStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }
    } catch (err: unknown) {
      console.error('EmailJS transmission error:', err);
      setStatus('error');
      const detail = typeof err === 'object' && err !== null && 'text' in err 
        ? String((err as { text: unknown }).text) 
        : (err instanceof Error ? err.message : 'Unknown network transmission error');
      setErrorMessage(`EmailJS error: ${detail}. Please verify your Service ID, Template ID, and Public Key.`);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${PROFILE.links.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.user_name}\nEmail: ${formData.user_email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-cyber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Mail size={13} />
            <span>// 06. SECURE DISPATCH &amp; CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Initiate Direct Communications
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Open for systems consulting, autonomous voice AI architectures, real-time WebRTC media pipelines, and collaborative engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Credentials & Status (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Mailbox Card with 1-Click Copy */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-amber-500/20 space-y-5">
              <h3 className="text-lg font-bold font-sans text-white flex items-center gap-2">
                <Terminal size={18} className="text-amber-400" />
                <span>Founder's Direct Channel</span>
              </h3>
              
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Direct route to Sanjay S. Messages are encrypted and routed directly to my workspace terminal.
              </p>

              {/* Email Copier */}
              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Direct Email</span>
                    <span className="text-xs font-mono text-white select-all">{PROFILE.links.email}</span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors relative"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-mono">
                      <Check size={15} />
                      <span className="text-[10px]">Copied</span>
                    </span>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-950/70 border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all flex items-center gap-2.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Github size={16} className="text-amber-400" />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>

                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-950/70 border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all flex items-center gap-2.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Linkedin size={16} className="text-amber-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>
              </div>
            </div>

            {/* Quick Mailto Fallback Action */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">Prefer desktop email client?</span>
              <button
                onClick={handleMailtoFallback}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/20 hover:bg-amber-500/30 transition-colors"
              >
                <span>Launch Mailto</span>
                <ExternalLink size={12} />
              </button>
            </div>

            {/* Response Time SLA Pill */}
            <div className="p-4 rounded-xl bg-obsidian-850/60 border border-white/5 flex items-center gap-3">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
              <div className="text-xs font-mono">
                <span className="text-white block font-bold">Guaranteed Response SLA</span>
                <span className="text-slate-400">Inquiries evaluated and answered within 24 hours.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/25 shadow-xl">
              
              {/* Quick Topic Chips */}
              <div className="mb-6">
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  // Quick Select Inquiry Scope:
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickTopics.map((topic, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      onClick={() => handleSelectTopic(topic)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left ${
                        formData.subject === topic
                          ? 'bg-amber-500/25 text-amber-300 border border-amber-500/40 font-semibold'
                          : 'bg-obsidian-950 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="e.g. elena@systems.io"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Project Scope *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Architectural Consultation / WebRTC Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-mono transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Message Payload *
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your project scope, technical requirements, timeline, or consultation topics..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-sans transition-colors resize-none"
                  />
                </div>

                {/* Status Feedback Alerts */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span>Payload received successfully. Sanjay will review and transmit response within 24 hours.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-start gap-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl font-sans font-bold text-sm text-obsidian-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-orange-300 transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 disabled:opacity-50 transform active:scale-98"
                >
                  {status === 'sending' ? (
                    <>
                      <RefreshCw size={15} className="animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Transmit Dispatch Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
