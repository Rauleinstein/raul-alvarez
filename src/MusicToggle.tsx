import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_KEY = 'ambient-music';
const VOL_DEFAULT = 0.3;
const VOL_CHAT_OPEN = 0.1;
const FADE_MS = 600;
const BAR_COUNT = 4;
const FFT_SIZE = 256;

/*
 * Audio analysis of ambient-loop.mp3 (Uncharted Worlds):
 *
 * Band energy (RMS dB, stable body 30-90s):
 *   Sub-bass  60-200Hz:  avg -20.8 dB  (range ~4 dB at 100ms)
 *   Bass     200-500Hz:  avg -21.3 dB  (range ~1 dB — nearly flat)
 *   Low-mid  500-1200Hz: avg -25.7 dB  (range ~2 dB — slow oscillations)
 *   Mid     1200-3000Hz: avg -35.2 dB  (range ~2 dB — very quiet)
 *   High    3000-16kHz:  avg -43.5 dB  (negligible)
 *
 * Key finding: This is a pad/drone track. No beats, no transients.
 * Dynamic range per-band at 100ms is 1-4 dB — imperceptible as bar movement.
 *
 * Strategy: Map these micro-variations into visible bar motion by:
 * 1. Per-band normalization using measured floor/ceiling
 * 2. Aggressive power curve (^0.3) to expand tiny differences
 * 3. Frame-to-frame delta detection for "swell" sensing
 * 4. Staggered per-bar phase offsets so bars never move in unison
 * 5. Smooth interpolation for organic, breathing movement
 */

// Per-band calibration from analysis (dB values in the stable body)
// [floor, ceiling] — real measured range at 100ms resolution
const BAND_CALIBRATION = [
  { lo: 60, hi: 200, floor: -24, ceil: -18, label: 'sub-bass' },
  { lo: 200, hi: 500, floor: -20, ceil: -17, label: 'bass' },
  { lo: 500, hi: 1200, floor: -23, ceil: -20, label: 'low-mid' },
  { lo: 1200, hi: 3000, floor: -32, ceil: -28, label: 'mid' },
];

// Map frequency in Hz to FFT bin index (at 48kHz sample rate, FFT_SIZE=256)
function hzToBin(hz: number): number {
  return Math.round(hz / (48000 / FFT_SIZE));
}

function fadeTo(audio: HTMLAudioElement, target: number, ms: number) {
  const start = audio.volume;
  const diff = target - start;
  const steps = 20;
  const stepMs = ms / steps;
  let step = 0;
  const interval = setInterval(() => {
    step++;
    audio.volume = Math.max(0, Math.min(1, start + diff * (step / steps)));
    if (step >= steps) clearInterval(interval);
  }, stepMs);
}

/** Equalizer bars: micro-variation amplifier for ambient music */
function EqualizerBars({ analyser }: { analyser: AnalyserNode | null }) {
  const barsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number>(0);
  const dataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const smoothRef = useRef<number[]>(Array(BAR_COUNT).fill(0.3));
  const prevRef = useRef<number[]>(Array(BAR_COUNT).fill(0));
  const swellRef = useRef<number[]>(Array(BAR_COUNT).fill(0));
  const frameRef = useRef(0);
  // Auto-calibration: track min/max per band in runtime
  const minRef = useRef<number[]>(Array(BAR_COUNT).fill(255));
  const maxRef = useRef<number[]>(Array(BAR_COUNT).fill(0));

  useEffect(() => {
    if (!analyser) return;

    analyser.fftSize = FFT_SIZE;
    const bufLen = analyser.frequencyBinCount;
    dataRef.current = new Uint8Array(bufLen);

    const bands = BAND_CALIBRATION.map(b => ({
      from: hzToBin(b.lo),
      to: hzToBin(b.hi),
    }));

    const tick = () => {
      frameRef.current++;
      analyser.getByteFrequencyData(dataRef.current!);

      for (let i = 0; i < BAR_COUNT; i++) {
        const band = bands[i];

        // Average FFT bins for this band
        let sum = 0;
        let count = 0;
        for (let j = band.from; j <= band.to && j < bufLen; j++) {
          sum += dataRef.current![j];
          count++;
        }
        if (count === 0) continue;
        const rawAvg = sum / count; // 0-255

        // Auto-calibrate with enforced minimum spread
        // Fast snap to new extremes, slow decay back
        if (rawAvg < minRef.current[i]) minRef.current[i] = rawAvg;
        else minRef.current[i] += (rawAvg - minRef.current[i]) * 0.0003;
        if (rawAvg > maxRef.current[i]) maxRef.current[i] = rawAvg;
        else maxRef.current[i] -= (maxRef.current[i] - rawAvg) * 0.0003;

        // Enforce minimum spread so bars don't converge to a flat line
        // The ambient track has ~4dB real variation → ~15-20 byte units
        const spread = maxRef.current[i] - minRef.current[i];
        const minSpread = 25;
        let effMin = minRef.current[i];
        let effMax = maxRef.current[i];
        if (spread < minSpread) {
          const mid = (effMin + effMax) / 2;
          effMin = mid - minSpread / 2;
          effMax = mid + minSpread / 2;
        }

        // Normalize to 0-1
        const normalized = (rawAvg - effMin) / (effMax - effMin);
        const clamped01 = Math.max(0, Math.min(1, normalized));

        // Swell detection: rising energy → momentary boost
        const delta = clamped01 - prevRef.current[i];
        prevRef.current[i] = clamped01;
        if (delta > 0.01) {
          swellRef.current[i] = Math.min(0.3, swellRef.current[i] + delta * 2);
        } else {
          swellRef.current[i] *= 0.94;
        }

        // Phase offset per bar so they breathe independently
        const phase = Math.sin(frameRef.current * 0.015 + i * 1.8) * 0.06;

        // Map to bar height: 15% floor → 100% ceiling, full visual range
        const target = 0.15 + clamped01 * 0.7 + swellRef.current[i] + phase;
        const clamped = Math.max(0.12, Math.min(1, target));

        // Lerp for smooth movement
        smoothRef.current[i] += (clamped - smoothRef.current[i]) * 0.15;

        const bar = barsRef.current[i];
        if (bar) bar.style.height = `${smoothRef.current[i] * 100}%`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [analyser]);

  return (
    <div className="flex items-end gap-[3px] h-[18px]">
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => { if (el) barsRef.current[i] = el; }}
          className="w-[4px] rounded-full bg-primary"
          style={{ height: '30%' }}
        />
      ))}
    </div>
  );
}

/** Muted state: dim bars breathing gently */
function MutedBars() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 18 }}>
      {[8, 13, 10, 11].map((h, i) => (
        <div
          key={i}
          style={{
            width: 4,
            height: h,
            borderRadius: 4,
            backgroundColor: 'hsl(var(--foreground) / 0.45)',
            transformOrigin: 'bottom',
            animation: `muted-breathe 2.5s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/** Skyrim-inspired dragon sigil for the music tooltip */
function SkyrimBadge() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0 text-black [.dark_&]:text-white"
    >
      <path
        d="M12.17 1.5c-.47 1.67-1.6 2.88-2.7 3.95-1.29 1.25-2.68 2.37-3.67 3.92-.83 1.31-1.25 2.72-1.35 4.26-.15 2.35.49 4.51 1.72 6.48.37.58.84 1.1 1.36 1.56-.31-1.41-.26-2.74.23-4.01.45-1.15 1.22-2.09 2.14-2.89.55-.48 1.16-.91 1.71-1.39.83-.72 1.45-1.56 1.66-2.67.31.51.56 1.02.72 1.58.28.98.23 1.95-.08 2.91-.38 1.14-1.07 2.07-1.87 2.93-.77.82-1.6 1.58-2.27 2.49-.63.86-.99 1.79-1.04 2.86-.04.75.07 1.48.32 2.19.04.11.08.22.15.41.51-.74 1.08-1.33 1.8-1.79.6-.38 1.25-.65 1.94-.84 1-.27 2.01-.47 2.98-.81 1.67-.57 2.92-1.57 3.66-3.22.52-1.15.68-2.37.59-3.62-.12-1.65-.61-3.19-1.3-4.68-.38-.81-.81-1.6-1.14-2.43-.55-1.39-.8-2.82-.61-4.32.02-.18.05-.36.09-.63-.77.74-1.55 1.32-2.45 1.72-.88.38-1.8.58-2.78.62.58-.69 1.21-1.32 1.69-2.08.58-.92.95-1.94.97-3.07.01-.32-.03-.64-.06-.94-.01-.14-.08-.28-.16-.53Z"
        fill="currentColor"
      />
      <path
        d="M15.68 6.12c-.74.82-1.59 1.43-2.6 1.83.97.15 1.89.05 2.76-.35.89-.41 1.56-1.05 2.16-1.87-.84.17-1.59.3-2.32.39Z"
        fill="hsl(var(--background))"
      />
    </svg>
  );
}

/** Tooltip styled as a comm transmission */
function CommTooltip() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.2 }}
      className="absolute left-full ml-3 bottom-1 whitespace-nowrap pointer-events-none"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 shadow-lg" style={{ backgroundColor: 'hsl(var(--background) / 0.97)', backdropFilter: 'blur(12px)' }}>
        <SkyrimBadge />
        <span className="text-xs text-muted-foreground font-mono tracking-wide">
          Far Horizons
        </span>
      </div>
    </motion.div>
  );
}

const SEEN_KEY = 'ambient-seen';
const AUTO_SHOW_DELAY = 10_000;

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [autoShow, setAutoShow] = useState(false);
  const [incoming, setIncoming] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const interactedRef = useRef(false);
  const chatOpenRef = useRef(false);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/audio/ambient-loop.mp3');
    audio.loop = true;
    audio.volume = VOL_DEFAULT;
    audio.preload = 'none';
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;
    // Remember if user had music on last session (visual hint only, no autoplay)
    try { wasPlayingRef.current = localStorage.getItem(STORAGE_KEY) === 'on'; } catch {}
    return () => { audio.pause(); audio.src = ''; };
  }, []);

  const ensureAudioContext = useCallback(() => {
    if (ctxRef.current) return;
    const ctx = new AudioContext();
    const source = ctx.createMediaElementSource(audioRef.current!);
    const node = ctx.createAnalyser();
    node.fftSize = FFT_SIZE;
    node.smoothingTimeConstant = 0.5;
    node.minDecibels = -90;
    node.maxDecibels = -10;
    source.connect(node);
    node.connect(ctx.destination);
    ctxRef.current = ctx;
    setAnalyser(node);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      ensureAudioContext();
      if (ctxRef.current?.state === 'suspended') ctxRef.current.resume();
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
    try { localStorage.setItem(STORAGE_KEY, playing ? 'on' : 'off'); } catch {}
  }, [playing, ensureAudioContext]);

  // Chat ducking
  useEffect(() => {
    const handleChatDuck = (e: Event) => {
      const open = (e as CustomEvent).detail?.open;
      chatOpenRef.current = open;
      setChatOpen(open);
      if (open) {
        setAutoShow(false);
        setIncoming(false);
      }
      const audio = audioRef.current;
      if (!audio || !playing) return;
      fadeTo(audio, open ? VOL_CHAT_OPEN : VOL_DEFAULT, FADE_MS);
    };
    window.addEventListener('chatToggle', handleChatDuck);
    return () => window.removeEventListener('chatToggle', handleChatDuck);
  }, [playing]);

  // Auto-show "incoming transmission" after 10s (one-time)
  useEffect(() => {
    let seen = false;
    try { seen = localStorage.getItem(SEEN_KEY) === '1'; } catch {}
    if (seen || playing) return;

    const showTimer = setTimeout(() => {
      if (interactedRef.current || chatOpenRef.current || window.innerWidth < 640) return;
      setAutoShow(true);
      setIncoming(true);
    }, AUTO_SHOW_DELAY);

    // After 9s: dismiss everything
    const dismissTimer = setTimeout(() => {
      setAutoShow(false);
      setIncoming(false);
      try { localStorage.setItem(SEEN_KEY, '1'); } catch {}
    }, AUTO_SHOW_DELAY + 9000);

    return () => { clearTimeout(showTimer); clearTimeout(dismissTimer); };
  }, [playing]);

  const toggle = useCallback(() => {
    interactedRef.current = true;
    setHovered(false);
    setAutoShow(false);
    setIncoming(false);
    try { localStorage.setItem(SEEN_KEY, '1'); } catch {}
    setPlaying(p => !p);
  }, []);

  const showTooltip = hovered || autoShow;

  // Hide completely on touch devices when chat is fullscreen
  if (chatOpen && typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={toggle}
      onMouseEnter={() => { if (window.matchMedia('(hover: hover)').matches) { setHovered(true); interactedRef.current = true; } }}
      onMouseLeave={() => { if (window.matchMedia('(hover: hover)').matches) setHovered(false); }}
      className={`fixed z-50 w-10 h-10 rounded-full flex items-center justify-center bg-card shadow-md hover:shadow-lg transition-shadow ${incoming ? 'border-2 border-primary' : 'border border-border/50'}`}
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px) + 0.5rem)',
        left: 'max(1.5rem, env(safe-area-inset-left, 0px) + 0.5rem)',
      }}
      aria-label={playing ? 'Mute ambient music' : 'Play ambient music'}
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="on"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <EqualizerBars analyser={analyser} />
          </motion.div>
        ) : (
          <motion.div
            key="off"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <MutedBars />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTooltip && <CommTooltip />}
      </AnimatePresence>
      {/* Pulse ring — same style as chat avatar */}
      {incoming && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.button>
  );
}
