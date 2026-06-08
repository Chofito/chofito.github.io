import { brandTextClass } from '../../../data/brandColors';
import type {
  BrandColor,
  RichSpan,
  SpanColor,
} from '../../../data/terminal/types';
import { MatrixText } from '../MatrixText';
import { RotateText } from '../RotateText';
import { HEX_GLYPHS, SlotText } from '../SlotText';
import { WaveText } from '../WaveText';
import { AsciiLoader } from './AsciiLoader';

const BASE_COLOR_CLASS: Record<string, string> = {
  default: 'text-terminal-green',
  dim: 'text-terminal-dim',
  amber: 'text-terminal-amber',
  accent: 'text-editor-accent',
};

function colorClassFor(color: SpanColor | undefined): string | undefined {
  if (!color || color === 'default') {
    return BASE_COLOR_CLASS.default;
  }
  if (color in BASE_COLOR_CLASS) {
    return BASE_COLOR_CLASS[color];
  }
  return brandTextClass(color as BrandColor);
}

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

        const tone = colorClassFor(span.color);

        const effectClassName = [tone, span.bold && 'font-bold']
          .filter(Boolean)
          .join(' ');

        if (span.effect === 'slot' || span.effect === 'decrypt') {
          return (
            <SlotText
              key={index}
              text={span.text}
              paused={paused}
              glyphs={span.effect === 'decrypt' ? HEX_GLYPHS : undefined}
              className={effectClassName}
            />
          );
        }
        if (span.effect === 'matrix') {
          return (
            <MatrixText
              key={index}
              text={span.text}
              paused={paused}
              className={effectClassName}
            />
          );
        }
        if (span.effect === 'wave') {
          return (
            <WaveText
              key={index}
              text={span.text}
              className={effectClassName}
            />
          );
        }
        if (span.effect === 'rotate') {
          return (
            <RotateText
              key={index}
              text={span.text}
              paused={paused}
              className={effectClassName}
            />
          );
        }

        const classes = [
          !span.effect && tone,
          span.bold && 'font-bold',
          span.italic && 'italic',
          span.strike && 'line-through',
          span.effect === 'shimmer' && 'text-shimmer',
          span.effect === 'glow' && `text-glow ${tone}`,
          span.effect === 'glitch' && `text-glitch ${tone}`,
          span.effect === 'flicker' && `text-flicker ${tone}`,
          span.effect === 'scan' && `text-scan ${tone}`,
          span.effect === 'rgb' && `text-rgb ${tone}`,
          span.effect === 'ember' && 'text-ember',
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
