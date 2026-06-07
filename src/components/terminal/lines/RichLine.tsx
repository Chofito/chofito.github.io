import type { RichSpan } from '../../../data/terminal/types';
import { AsciiLoader } from './AsciiLoader';

const colorClass: Record<string, string> = {
  default: 'text-terminal-green',
  dim: 'text-terminal-dim',
  amber: 'text-terminal-amber',
  accent: 'text-editor-accent',
};

type RichLineProps = {
  spans: RichSpan[];
  paused?: boolean;
};

export function RichLine({ spans, paused = false }: RichLineProps) {
  return (
    <p className="font-mono text-sm leading-relaxed">
      {spans.map((span, index) => {
        if (span.kind === 'loader') {
          return (
            <AsciiLoader key={index} variant={span.variant} paused={paused} />
          );
        }

        const classes = [
          !span.effect && colorClass[span.color ?? 'default'],
          span.bold && 'font-bold',
          span.italic && 'italic',
          span.strike && 'line-through',
          span.effect === 'shimmer' && 'text-shimmer',
          span.effect === 'glow' &&
            `text-glow ${colorClass[span.color ?? 'default']}`,
          span.effect === 'glitch' &&
            `text-glitch ${colorClass[span.color ?? 'default']}`,
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <span key={index} className={classes}>
            {span.text}
          </span>
        );
      })}
    </p>
  );
}
