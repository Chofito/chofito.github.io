import { useEffect, useMemo, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Word rotator — types out a word, holds, deletes it, then types the next, looping
 * through a `|`-separated list with a blinking caret (e.g. `{rotate:a|b|c}`).
 *
 * JS-driven: pauses on inactive tabs; under `prefers-reduced-motion` it shows all
 * the words joined statically instead of animating.
 */

const TYPE_MS = 75;
const DELETE_MS = 40;
const HOLD_MS = 1500;

type Phase = 'typing' | 'hold' | 'deleting';

type RotateTextProps = {
  text: string; // `|`-separated list of words
  className?: string;
  paused?: boolean;
};

export function RotateText({
  text,
  className = '',
  paused = false,
}: RotateTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const words = useMemo(() => text.split('|').filter(Boolean), [text]);

  const [display, setDisplay] = useState(words[0] ?? '');
  const wordIndex = useRef(0);
  const length = useRef(words[0]?.length ?? 0);
  const phase = useRef<Phase>('hold');

  useEffect(() => {
    if (prefersReducedMotion || paused || words.length <= 1) {
      return;
    }

    let cancelled = false;
    let timeout = 0;

    const run = () => {
      if (cancelled) {
        return;
      }
      const word = words[wordIndex.current];
      let delay = TYPE_MS;

      if (phase.current === 'typing') {
        length.current = Math.min(word.length, length.current + 1);
        setDisplay(word.slice(0, length.current));
        if (length.current >= word.length) {
          phase.current = 'hold';
          delay = HOLD_MS;
        }
      } else if (phase.current === 'hold') {
        phase.current = 'deleting';
        delay = DELETE_MS;
      } else {
        length.current = Math.max(0, length.current - 1);
        setDisplay(word.slice(0, length.current));
        if (length.current <= 0) {
          wordIndex.current = (wordIndex.current + 1) % words.length;
          phase.current = 'typing';
        } else {
          delay = DELETE_MS;
        }
      }

      timeout = window.setTimeout(run, delay);
    };

    timeout = window.setTimeout(run, HOLD_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [prefersReducedMotion, paused, words]);

  if (prefersReducedMotion) {
    return <span className={className}>{words.join(' / ')}</span>;
  }

  return (
    <span className={className}>
      {display}
      {words.length > 1 && (
        <span className="cursor-blink" aria-hidden="true">
          ▋
        </span>
      )}
    </span>
  );
}
