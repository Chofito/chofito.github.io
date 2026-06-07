import { useEffect, useRef, useState } from 'react';

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
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
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
  }, [text, speed, onComplete, paused]);

  return <span className={className}>{displayed}</span>;
}
