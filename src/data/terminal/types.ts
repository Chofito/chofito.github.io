export type SpanColor = 'default' | 'dim' | 'amber' | 'accent';
export type SpanEffect = 'shimmer' | 'glow' | 'glitch';
export type LoaderVariant = 'dots' | 'braille' | 'bar';

export type RichSpan =
  | {
      kind: 'text';
      text: string;
      bold?: boolean;
      italic?: boolean;
      strike?: boolean;
      color?: SpanColor;
      effect?: SpanEffect;
    }
  | {
      kind: 'loader';
      variant: LoaderVariant;
    };

export type OutputLine =
  | { type: 'rich'; spans: RichSpan[] }
  | { type: 'loader'; variant: LoaderVariant; label?: string }
  | { type: 'blank' }
  | { type: 'list'; items: readonly string[] }
  | { type: 'links'; items: readonly { label: string; href: string }[] };

export type TerminalCommand = {
  input: string;
  lines: readonly OutputLine[];
  pauseAfter?: number;
};
