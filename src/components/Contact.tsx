import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageSquare, 
  Terminal,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
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

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          particleCount: 90,
          spread: 75,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Mail size={13} />
            <span>// 05. DIRECT DISPATCH & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Whether inquiring about autonomous AI architectures, real-time WebRTC media pipelines, or collaboration with PRISMATIX4 — direct your telemetry here.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Channels & Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-white/10">
              
              <div>
                <h3 className="text-xl font-bold text-white font-sans mb-3 flex items-center gap-2">
                  <Terminal size={18} className="text-amber-400" />
                  <span>Engineering Inquiries</span>
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
                  Available for architectural advisory, autonomous systems consultation, and high-impact software initiatives.
                </p>

                {/* Email Direct Channel Card */}
                <div className="p-4 rounded-xl bg-obsidian-850 border border-amber-500/20 mb-5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Primary Official Channel
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${PROFILE.links.email}`}
                      className="font-mono text-sm text-amber-300 hover:underline break-all font-semibold"
                    >
                      {PROFILE.links.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg bg-obsidian-950 border border-white/10 hover:border-amber-400 text-slate-400 hover:text-amber-400 transition-colors flex-shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                {/* Direct Links List */}
                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-obsidian-850/60 border border-white/5 hover:border-amber-500/30 flex items-center justify-between text-slate-300 hover:text-amber-400 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github size={16} className="text-slate-400 group-hover:text-amber-400" />
                      <span>github.com/sanjay-s-123</span>
                    </div>
                    <ExternalLink size={13} className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={PROFILE.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-obsidian-850/60 border border-white/5 hover:border-teal-cyber/40 flex items-center justify-between text-slate-300 hover:text-teal-cyber transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin size={16} className="text-slate-400 group-hover:text-teal-cyber" />
                      <span>linkedin.com/in/sanjay-s-tech</span>
                    </div>
                    <ExternalLink size={13} className="text-slate-500 group-hover:text-teal-cyber group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={PROFILE.links.prismatix4}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-obsidian-850/60 border border-white/5 hover:border-amber-500/30 flex items-center justify-between text-slate-300 hover:text-amber-400 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold flex items-center justify-center">P4</span>
                      <span>PRISMATIX4 Official Hub</span>
                    </div>
                    <ExternalLink size={13} className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-cyber">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-cyber animate-pulse" />
                  <span>Direct Routing Active</span>
                </span>
                <span>Response Time: &lt; 24h</span>
              </div>

            </div>
          </div>

          {/* Right Column: Functional EmailJS Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/25 bg-obsidian-900/90 relative">
              
              <h3 className="text-lg font-bold text-white font-sans mb-1 flex items-center gap-2">
                <MessageSquare size={17} className="text-amber-400" />
                <span>Send Dispatch Message</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Connected via EmailJS dispatch pipeline
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-xl bg-obsidian-950 border border-emerald-500/30 text-center space-y-4 my-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <ShieldCheck size={26} />
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">
                    Transmission Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your dispatch has been transmitted to Sanjay S and the PRISMATIX4 engineering team.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 rounded-xl bg-obsidian-850 border border-white/10 text-xs font-mono text-amber-400 hover:border-amber-400 transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {/* Universal EmailJS Template variable bindings */}
                  <input type="hidden" name="from_name" value={formData.user_name} />
                  <input type="hidden" name="from_email" value={formData.user_email} />
                  <input type="hidden" name="reply_to" value={formData.user_email} />
                  <input type="hidden" name="to_name" value="Sanjay S" />
                  <input type="hidden" name="to_email" value={PROFILE.links.email} />

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs font-mono space-y-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{errorMessage}</span>
                      </div>
                      <div className="pt-2 border-t border-red-500/20 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/40 text-[11px] font-semibold transition-colors flex items-center gap-1.5"
                        >
                          <Mail size={12} />
                          <span>Launch Mail App Directly (Pre-filled)</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* User Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Identifier / Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder-slate-600 font-sans transition-colors"
                      />
                    </div>

                    {/* User Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Telemetry Return Address / Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder-slate-600 font-sans transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject / Topic <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Architecture Collaboration / System Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder-slate-600 font-sans transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Transmission Payload / Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, architectural requirements, or collaboration goals..."
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-850/80 border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder-slate-600 font-sans resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-obsidian-950 font-bold font-sans text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] disabled:opacity-50 active:scale-95 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>{status === 'sending' ? 'Transmitting Dispatch...' : 'Dispatch Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
