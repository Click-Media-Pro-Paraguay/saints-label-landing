import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  /** Visible label, e.g. "Listen — 8 min". */
  label?: string;
  /** Unique GTM event slug per page (e.g. "quiet_hour"). */
  trackingSlug: string;
};

const SPEEDS = [1, 1.25, 1.5] as const;

const STYLES = `
.aap{
  background:#FFFDF7;
  border:1px solid var(--rule, #D9CDB6);
  border-radius:6px;
  padding:14px 18px;
  margin: 22px 0 28px;
  font-family:'Inter',sans-serif;
  color: var(--ink, #26211B);
}
.aap .row{ display:flex; align-items:center; gap:14px; }
.aap .play{
  width:42px; height:42px; min-width:42px;
  border-radius:50%;
  background: var(--burgundy, #7A2E2A);
  color:#FFFDF7;
  border:0; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition: background .15s ease;
}
.aap .play:hover{ background: var(--burgundy-deep, #5E2220); }
.aap .play svg{ width:16px; height:16px; }
.aap .label{ font-size:12px; letter-spacing:.18em; text-transform:uppercase; color:#6B6053; }
.aap .scrub{
  flex:1; -webkit-appearance:none; appearance:none;
  height:3px; background:#E4D9C2; border-radius:2px; outline:none; cursor:pointer;
}
.aap .scrub::-webkit-slider-thumb{
  -webkit-appearance:none; appearance:none;
  width:14px; height:14px; background:var(--burgundy, #7A2E2A); border-radius:50%; border:0;
}
.aap .scrub::-moz-range-thumb{
  width:14px; height:14px; background:var(--burgundy, #7A2E2A); border-radius:50%; border:0;
}
.aap .time{ font-variant-numeric: tabular-nums; font-size:13px; color:#6B6053; min-width:90px; text-align:right; }
.aap .speed{
  background:transparent; border:1px solid var(--rule, #D9CDB6);
  color: var(--ink, #26211B); border-radius:999px; padding:4px 10px;
  font-size:12px; font-family:'Inter',sans-serif; cursor:pointer; font-variant-numeric:tabular-nums;
}
.aap .speed:hover{ border-color: var(--burgundy, #7A2E2A); }

/* Sticky mini-bar */
.aap-sticky{
  position:fixed; top:0; left:0; right:0;
  background: rgba(248, 242, 231, 0.96);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom:1px solid var(--rule, #D9CDB6);
  z-index: 50;
  padding: 8px 16px;
  font-family:'Inter',sans-serif;
  color: var(--ink, #26211B);
  transform: translateY(-100%);
  transition: transform .25s ease;
}
.aap-sticky.visible{ transform: translateY(0); }
.aap-sticky .row{
  max-width: 980px; margin: 0 auto;
  display:flex; align-items:center; gap:12px;
}
.aap-sticky .play{
  width:32px; height:32px; min-width:32px;
}
.aap-sticky .play svg{ width:12px; height:12px; }
.aap-sticky .scrub{ flex:1; }
.aap-sticky .time{ font-size:12px; min-width:80px; }
.aap-sticky .label{ display:none; }
@media (min-width: 640px){ .aap-sticky .label{ display:inline; } }
@media (prefers-reduced-motion: reduce){
  .aap-sticky{ transition: none; }
}
`;

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 5l12 7-12 7z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

export const ArticleAudioPlayer = ({ src, label = "Listen", trackingSlug }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const inlineRef = useRef<HTMLDivElement | null>(null);
  const milestonesRef = useRef<Set<string>>(new Set());

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<number>(1);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track when the inline card has scrolled out of view → reveal sticky.
  useEffect(() => {
    const node = inlineRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Sticky is visible only when (a) inline card is below the fold AND (b) playback has begun.
        setScrolledPast(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-40px 0px 0px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const pushEvent = (action: string) => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: `audio_${trackingSlug}`, action });
  };

  const onPlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
    if (!milestonesRef.current.has("play")) {
      milestonesRef.current.add("play");
      pushEvent("play");
    }
  };
  const onPause = () => {
    setIsPlaying(false);
    pushEvent("pause");
  };
  const onTime = () => {
    const a = audioRef.current;
    if (!a) return;
    setCurrent(a.currentTime);
    if (a.duration > 0) {
      const pct = (a.currentTime / a.duration) * 100;
      for (const m of [25, 50, 75] as const) {
        const key = `progress_${m}`;
        if (pct >= m && !milestonesRef.current.has(key)) {
          milestonesRef.current.add(key);
          pushEvent(key);
        }
      }
    }
  };
  const onEnded = () => {
    setIsPlaying(false);
    if (!milestonesRef.current.has("complete")) {
      milestonesRef.current.add("complete");
      pushEvent("complete");
    }
  };
  const onLoaded = () => {
    const a = audioRef.current;
    if (a) setDuration(a.duration);
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) void a.play();
    else a.pause();
  };

  const onScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setCurrent(a.currentTime);
  };

  const cycleSpeed = () => {
    const i = SPEEDS.indexOf(speed as typeof SPEEDS[number]);
    const next = SPEEDS[(i + 1) % SPEEDS.length];
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  const scrubMax = duration > 0 ? duration : 0;

  return (
    <>
      <style>{STYLES}</style>
      <div className="aap" ref={inlineRef} role="region" aria-label={label}>
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTime}
          onEnded={onEnded}
          onLoadedMetadata={onLoaded}
        />
        <div className="row">
          <button
            type="button"
            className="play"
            onClick={toggle}
            aria-label={isPlaying ? "Pause narration" : "Play narration"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div style={{ flex: 1 }}>
            <div className="label">{label}</div>
            <input
              className="scrub"
              type="range"
              min={0}
              max={scrubMax}
              step={0.1}
              value={current}
              onChange={onScrub}
              aria-label="Scrub narration"
            />
          </div>
          <div className="time">
            {fmt(current)} / {fmt(duration)}
          </div>
          <button
            type="button"
            className="speed"
            onClick={cycleSpeed}
            aria-label={`Playback speed ${speed}x`}
          >
            {speed.toFixed(speed === 1 ? 0 : 2).replace(/\.?0+$/, "")}×
          </button>
        </div>
      </div>

      {mounted && hasStarted && createPortal(
        <div
          className={`aap-sticky${scrolledPast ? " visible" : ""}`}
          role="region"
          aria-label={`${label} (mini player)`}
        >
          <div className="row">
            <button
              type="button"
              className="play"
              onClick={toggle}
              aria-label={isPlaying ? "Pause narration" : "Play narration"}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <span className="label">{label}</span>
            <input
              className="scrub"
              type="range"
              min={0}
              max={scrubMax}
              step={0.1}
              value={current}
              onChange={onScrub}
              aria-label="Scrub narration"
            />
            <div className="time">
              {fmt(current)} / {fmt(duration)}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default ArticleAudioPlayer;
