import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

type TypewriterLineProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  paused?: boolean;
};

export function TypewriterLine({
  text,
  speed = 35,
  onComplete,
  className = '',
  paused = false,
}: TypewriterLineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    if (paused || completedRef.current) {
      return;
    }

    const timer = window.setInterval(() => {
      if (paused) {
        return;
      }

      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        window.clearInterval(timer);
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.();
        }
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed, onComplete, paused, prefersReducedMotion]);

  return <span className={className}>{displayed}</span>;
}
