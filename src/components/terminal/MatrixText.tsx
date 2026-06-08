import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Matrix "digital rain" decode. Each character rains down (random glyphs falling,
 * tinted green) and locks into the real text at a staggered random time, so the
 * word resolves out of the noise. Decodes once, then holds.
 *
 * JS-driven (like SlotText): pauses on inactive tabs, static under reduced motion.
 */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$?|/<>=*+';
const TICK_MS = 55;

const randGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

type MatrixTextProps = {
  text: string;
  className?: string;
  paused?: boolean;
};

export function MatrixText({
  text,
  className = '',
  paused = false,
}: MatrixTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const chars = [...text];

  const settleAt = useRef<number[]>([]);
  if (settleAt.current.length !== chars.length) {
    // per-char lock time (in ticks) — staggered for a rain-like decode
    settleAt.current = chars.map(() => 4 + Math.floor(Math.random() * 26));
  }
  const lastTick = Math.max(1, ...settleAt.current);

  const tick = useRef(0);
  const done = useRef(false);
  const [, forceRender] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || paused || done.current) {
      return;
    }

    const timer = window.setInterval(() => {
      tick.current += 1;
      if (tick.current > lastTick) {
        done.current = true;
        window.clearInterval(timer);
      }
      forceRender((value) => value + 1);
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, paused, lastTick]);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {chars.map((char, index) => {
        if (char === ' ') {
          return <span key={index}> </span>;
        }
        const locked = done.current || tick.current > settleAt.current[index];
        return locked ? (
          <span key={index}>{char}</span>
        ) : (
          <span key={index} className="matrix-rolling">
            {randGlyph()}
          </span>
        );
      })}
    </span>
  );
}
