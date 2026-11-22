/**
 * Web Audio API Robotic Beep, UI Interaction SFX & Speech Synthesizer.
 * Zero external audio assets required; generates crisp, click-free cyber tones.
 */

class PetAudioEngine {
  private ctx: AudioContext | null = null;
  private uiMuted = false;
  private lastScrollTick = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('prismatix4_ui_sfx_muted');
      if (saved === 'true') {
        this.uiMuted = true;
      }
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public isUiAudioMuted(): boolean {
    return this.uiMuted;
  }

  public setUiAudioMuted(muted: boolean) {
    this.uiMuted = muted;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('prismatix4_ui_sfx_muted', String(muted));
    }
    if (!muted) {
      this.playUiSwitch(true);
    }
  }

  private playTone(
    freq: number,
    duration: number,
    startTimeOffset = 0,
    type: OscillatorType = 'sine',
    volume = 0.06,
    slideToFreq?: number
  ) {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime + startTimeOffset;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideToFreq) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideToFreq), now + duration);
    }

    // Smooth ADSR envelope to prevent audio clicks
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  // ==========================================
  // Global UI Interaction Sound Effects
  // ==========================================

  /** Crisp tactile cyber micro-click for buttons & links */
  playUiClick() {
    if (this.uiMuted) return;
    this.playTone(940, 0.032, 0, 'triangle', 0.032, 620);
  }

  /** Soft dual-tone switch for tabs, toggles & filters */
  playUiSwitch(force = false) {
    if (this.uiMuted && !force) return;
    this.playTone(680, 0.035, 0, 'sine', 0.032, 920);
    this.playTone(980, 0.04, 0.03, 'triangle', 0.028);
  }

  /** Ultra-subtle throttled cyber tick during scrolling */
  playScrollTick() {
    if (this.uiMuted) return;
    const now = performance.now();
    if (now - this.lastScrollTick < 180) return;
    this.lastScrollTick = now;
    this.playTone(460, 0.022, 0, 'sine', 0.016, 580);
  }

  /** Distinct chime when scrolling into a new portfolio section */
  playSectionEnter() {
    if (this.uiMuted) return;
    const now = performance.now();
    if (now - this.lastScrollTick < 260) return;
    this.lastScrollTick = now;
    this.playTone(580, 0.045, 0, 'triangle', 0.025, 760);
  }

  // ==========================================
  // Byte AI Pet Sound Effects
  // ==========================================

  /** Cute wake-up chime when opening Byte */
  playWakeBeep() {
    this.playTone(520, 0.08, 0, 'triangle', 0.055, 780);
    this.playTone(780, 0.11, 0.08, 'sine', 0.06, 1040);
  }

  /** Subtle tactile blip when user sends a message */
  playUserSendBlip() {
    this.playTone(640, 0.05, 0, 'sine', 0.04, 480);
  }

  /** Soft processing chirps while Byte thinks */
  playThinkingChirps() {
    this.playTone(880, 0.045, 0, 'sine', 0.03);
    this.playTone(1040, 0.045, 0.09, 'sine', 0.03);
    this.playTone(960, 0.05, 0.18, 'sine', 0.03);
  }

  /** R2-D2 / Wall-E style cute robotic speech cadence */
  playRoboticSpeakCadence() {
    const baseFreqs = [620, 860, 740, 1120, 920];
    let offset = 0;
    const count = 4;

    for (let i = 0; i < count; i++) {
      const f1 = baseFreqs[Math.floor(Math.random() * baseFreqs.length)];
      const f2 = f1 * (Math.random() > 0.5 ? 1.25 : 0.82);
      const dur = 0.055 + Math.random() * 0.035;
      this.playTone(f1, dur, offset, i % 2 === 0 ? 'triangle' : 'sine', 0.05, f2);
      offset += dur + 0.02;
    }
  }

  /** Happy sparkling arpeggio for headpats */
  playHappyPurr() {
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.11, idx * 0.065, 'triangle', 0.055);
    });
  }

  /** Speaks cleaned text using Web Speech API with cute robotic pitch/cadence */
  speakText(rawText: string, onStart?: () => void, onEnd?: () => void) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }

    window.speechSynthesis.cancel();

    // Strip markdown bold & emojis for cleaner TTS pronunciation
    const cleanText = rawText
      .replace(/\*\*/g, '')
      .replace(/[🚀🧠🌐📬💖👋✨⚡💛😄•]/g, '')
      .replace(/\n+/g, '. ')
      .trim();

    if (!cleanText) {
      onEnd?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.pitch = 1.28; // Cute bright robotic tone
    utterance.rate = 1.08;
    utterance.volume = 0.85;

    utterance.onstart = () => onStart?.();
    utterance.onend = () => onEnd?.();
    utterance.onerror = () => onEnd?.();

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const petAudio = new PetAudioEngine();
