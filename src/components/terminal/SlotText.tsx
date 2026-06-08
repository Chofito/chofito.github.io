import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Slot-machine / scramble text effect.
 *
 * Timeline (per element):
 *  1. spin-in   — every char rolls random glyphs, then locks left→right (the reels
 *                 stopping one by one) until the real text is revealed.
 *  2. hold      — shows the real text for ~10s.
 *  3. scramble  — chars unlock and roll again until the word is unreadable.
 *  4. reassemble — chars re-lock into the real text. Then loops back to (2).
 *
 * JS-driven (like AsciiLoader) so it can pause on inactive tabs and fall back to
 * static text under `prefers-reduced-motion`.
 */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$?/<>=*+';
/** Charset for the `{decrypt:…}` variant — reads like a hex/crypto decode. */
export const HEX_GLYPHS = '0123456789ABCDEF';
const TICK_MS = 50;
const LOCK_EVERY = 2; // ticks between each char locking during spin-in/reassemble
const HOLD_TICKS = Math.round(10000 / TICK_MS); // ~10s settled

type Phase = 'spinIn' | 'hold' | 'scrambleOut' | 'reassemble';

type SlotTextProps = {
  text: string;
  className?: string;
  paused?: boolean;
  glyphs?: string;
};

export function SlotText({
  text,
  className = '',
  paused = false,
  glyphs = GLYPHS,
}: SlotTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const randGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];
  const chars = [...text];
  const count = chars.length;

  const [, forceRender] = useState(0);
  const revealed = useRef(0); // chars [0, revealed) are locked to real text
  const phase = useRef<Phase>('spinIn');
  const sub = useRef(0);
  const hold = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion || paused) {
      return;
    }

    const timer = window.setInterval(() => {
      switch (phase.current) {
        case 'spinIn':
        case 'reassemble':
          sub.current += 1;
          if (sub.current >= LOCK_EVERY) {
            sub.current = 0;
            revealed.current = Math.min(count, revealed.current + 1);
            if (revealed.current >= count) {
              phase.current = 'hold';
              hold.current = 0;
            }
          }
          break;
        case 'hold':
          hold.current += 1;
          if (hold.current >= HOLD_TICKS) {
            phase.current = 'scrambleOut';
          }
          break;
        case 'scrambleOut':
          revealed.current = Math.max(0, revealed.current - 1);
          if (revealed.current <= 0) {
            phase.current = 'reassemble';
            sub.current = 0;
          }
          break;
      }
      forceRender((tick) => tick + 1);
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, paused, count]);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const lockedTo = revealed.current;

  return (
    <span className={className}>
      {chars.map((char, index) => {
        if (char === ' ') {
          // keep word spacing; never roll spaces
          return <span key={index}>{' '}</span>;
        }
        if (index < lockedTo) {
          return <span key={index}>{char}</span>;
        }
        return (
          <span
            key={index}
            className="slot-rolling"
            style={{ animationDelay: `${(index % 5) * -0.03}s` }}
          >
            {randGlyph()}
          </span>
        );
      })}
    </span>
  );
}
