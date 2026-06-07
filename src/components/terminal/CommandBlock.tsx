import { useEffect, useState } from 'react';
import type { TerminalCommand } from '../../data/terminal/types';
import { TerminalOutput } from './TerminalOutput';
import { TypewriterLine } from './TypewriterLine';

type CommandBlockProps = {
  command: TerminalCommand;
  animate: boolean;
  skip: boolean;
  paused?: boolean;
  onDone: () => void;
};

export function CommandBlock({
  command,
  animate,
  skip,
  paused = false,
  onDone,
}: CommandBlockProps) {
  const [phase, setPhase] = useState<'typing' | 'output'>('typing');

  if (!animate || skip) {
    return (
      <div className="space-y-1">
        <p className="font-mono text-sm text-gray-300">{command.input}</p>
        <TerminalOutput lines={command.lines} paused={paused} />
      </div>
    );
  }

  if (phase === 'typing') {
    return (
      <div className="font-mono text-sm">
        <TypewriterLine
          key={command.input}
          text={command.input}
          className="text-gray-300"
          paused={paused}
          onComplete={() => setPhase('output')}
        />
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="font-mono text-sm text-gray-300">{command.input}</p>
      <TerminalOutput lines={command.lines} paused={paused} />
      <PauseThenDone
        pauseAfter={command.pauseAfter ?? 300}
        paused={paused}
        onDone={onDone}
      />
    </div>
  );
}

function PauseThenDone({
  pauseAfter,
  paused,
  onDone,
}: {
  pauseAfter: number;
  paused: boolean;
  onDone: () => void;
}) {
  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setTimeout(onDone, pauseAfter);
    return () => window.clearTimeout(timer);
  }, [pauseAfter, onDone, paused]);

  return null;
}
