export type BrandColor =
  | 'cursor'
  | 'claude'
  | 'opencode'
  | 'codex'
  | 'nextjs'
  | 'react-native'
  | 'expo'
  | 'typescript'
  | 'wot'
  | 'babel';

export type SpanColor = 'default' | 'dim' | 'amber' | 'accent' | BrandColor;
export type SpanEffect =
  | 'shimmer'
  | 'glow'
  | 'glitch'
  | 'slot'
  | 'matrix'
  | 'flicker'
  | 'scan'
  | 'rgb'
  | 'wave'
  | 'decrypt'
  | 'rotate'
  | 'ember';
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
