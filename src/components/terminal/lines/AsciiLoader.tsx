import { useEffect, useState } from 'react';
import type { LoaderVariant } from '../../../data/terminal/types';

const BRAILLE = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const DOTS = ['.', '..', '...'];
const BAR_WIDTH = 8;

type AsciiLoaderProps = {
  variant: LoaderVariant;
  label?: string;
  paused?: boolean;
};

function frameFor(variant: LoaderVariant, tick: number): string {
  switch (variant) {
    case 'braille':
      return BRAILLE[tick % BRAILLE.length];
    case 'dots':
      return DOTS[tick % DOTS.length];
    case 'bar': {
      const filled = tick % (BAR_WIDTH + 1);
      const bar = '='.repeat(filled).padEnd(BAR_WIDTH, ' ');
      return `[${bar}]`;
    }
  }
}

export function AsciiLoader({
  variant,
  label,
  paused = false,
}: AsciiLoaderProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(
      () => {
        setTick((t) => t + 1);
      },
      variant === 'bar' ? 120 : 180,
    );

    return () => window.clearInterval(timer);
  }, [variant, paused]);

  const frame = frameFor(variant, tick);

  return (
    <span className="font-mono text-sm text-terminal-green">
      <span className="text-editor-accent">{frame}</span>
      {label ? ` ${label}` : null}
    </span>
  );
}
