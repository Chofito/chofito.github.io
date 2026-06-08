import { useEffect, useMemo, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import {
  type CommandSegment,
  type CommandSegmentKind,
  parseCommandInput,
} from './parseCommandInput';

const kindClass: Record<CommandSegmentKind, string> = {
  prompt: 'text-syntax-string',
  command: 'text-terminal-command',
  path: 'text-terminal-path',
  flag: 'text-terminal-flag',
  plain: 'text-terminal-green',
};

type CommandLineProps = {
  input: string;
  visibleLength?: number;
};

function renderSegments(segments: CommandSegment[], visibleLength: number) {
  let remaining = visibleLength;

  return segments.flatMap((segment, index) => {
    if (remaining <= 0) {
      return [];
    }

    const text = segment.text.slice(0, remaining);
    remaining -= text.length;

    if (!text) {
      return [];
    }

    return [
      <span key={index} className={kindClass[segment.kind]}>
        {text}
      </span>,
    ];
  });
}

export function CommandLine({ input, visibleLength }: CommandLineProps) {
  const segments = useMemo(() => parseCommandInput(input), [input]);
  const length = visibleLength ?? input.length;

  return (
    <span className="font-mono text-sm">
      {renderSegments(segments, length)}
    </span>
  );
}

type TypewriterCommandLineProps = {
  input: string;
  speed?: number;
  onComplete?: () => void;
  paused?: boolean;
};

export function TypewriterCommandLine({
  input,
  speed = 35,
  onComplete,
  paused = false,
}: TypewriterCommandLineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleLength, setVisibleLength] = useState(0);
  const indexRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLength(input.length);
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
      setVisibleLength(indexRef.current);

      if (indexRef.current >= input.length) {
        window.clearInterval(timer);
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.();
        }
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [input, speed, onComplete, paused, prefersReducedMotion]);

  return <CommandLine input={input} visibleLength={visibleLength} />;
}
