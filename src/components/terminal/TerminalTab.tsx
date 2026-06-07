import { useRef, useState } from 'react';
import { terminalCommands } from '../../data/bio';
import { useFollowScroll } from '../../hooks/useFollowScroll';
import { CommandBlock } from './CommandBlock';

type TerminalTabProps = {
  isActive?: boolean;
};

export function TerminalTab({ isActive = true }: TerminalTabProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [skip, setSkip] = useState(false);

  const allDone = skip || step >= terminalCommands.length;

  useFollowScroll(contentRef, isActive && !allDone);

  const handleSkip = () => {
    setSkip(true);
    setStep(terminalCommands.length);
  };

  return (
    <div className="content-safe-bottom relative p-4 text-sm select-text">
      {!allDone && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute top-3 right-3 rounded border border-editor-border bg-editor-panel px-2 py-0.5 font-mono text-xs text-terminal-dim transition-colors hover:border-editor-accent hover:text-gray-300"
          aria-label="Skip terminal animation"
        >
          skip →
        </button>
      )}

      <div ref={contentRef} className="space-y-4">
        {terminalCommands.map((command, index) => {
          if (!skip && index > step) {
            return null;
          }

          const isCurrent =
            !skip && index === step && step < terminalCommands.length;
          const isFinished = skip || index < step;

          return (
            <CommandBlock
              key={command.input}
              command={command}
              animate={isCurrent}
              skip={isFinished}
              paused={isCurrent && !isActive}
              onDone={() => setStep((current) => current + 1)}
            />
          );
        })}
      </div>

      {allDone && (
        <p className="mt-4">
          <span className="cursor-blink inline-block w-2 h-4 bg-terminal-green align-middle" />
        </p>
      )}
    </div>
  );
}
