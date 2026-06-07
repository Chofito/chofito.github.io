import type { OutputLine } from '../../data/terminal/types';
import { AsciiLoader } from './lines/AsciiLoader';
import { LinksRow } from './lines/LinksRow';
import { ListLine } from './lines/ListLine';
import { RichLine } from './lines/RichLine';

type TerminalOutputProps = {
  lines: readonly OutputLine[];
  paused?: boolean;
};

export function TerminalOutput({ lines, paused = false }: TerminalOutputProps) {
  return (
    <div className="space-y-1 pl-2">
      {lines.map((line, index) => {
        switch (line.type) {
          case 'blank':
            return <div key={index} className="h-3" />;
          case 'rich':
            return <RichLine key={index} spans={line.spans} paused={paused} />;
          case 'loader':
            return (
              <p key={index} className="font-mono text-sm">
                <AsciiLoader
                  variant={line.variant}
                  label={line.label}
                  paused={paused}
                />
              </p>
            );
          case 'list':
            return <ListLine key={index} items={line.items} />;
          case 'links':
            return <LinksRow key={index} items={line.items} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
