import { BRAND_TAG_COLORS } from '../brandColors';
import type { LoaderVariant, RichSpan, SpanColor, SpanEffect } from './types';

type StyleFlags = {
  bold?: boolean;
  italic?: boolean;
  strike?: boolean;
  color?: SpanColor;
  effect?: SpanEffect;
};

const BRAND_TAG_STYLES = Object.fromEntries(
  Object.entries(BRAND_TAG_COLORS).map(([tag, color]) => [
    tag,
    { color } satisfies Partial<StyleFlags>,
  ]),
);

const TAG_STYLES: Record<string, Partial<StyleFlags>> = {
  dim: { color: 'dim' },
  amber: { color: 'amber' },
  accent: { color: 'accent' },
  shimmer: { effect: 'shimmer' },
  glow: { effect: 'glow' },
  glitch: { effect: 'glitch' },
  slot: { effect: 'slot' },
  matrix: { effect: 'matrix' },
  flicker: { effect: 'flicker' },
  scan: { effect: 'scan' },
  rgb: { effect: 'rgb' },
  wave: { effect: 'wave' },
  decrypt: { effect: 'decrypt' },
  rotate: { effect: 'rotate' },
  ember: { effect: 'ember' },
  ...BRAND_TAG_STYLES,
};

const LOADER_VARIANTS = new Set<LoaderVariant>(['dots', 'braille', 'bar']);

function findNextSpecial(text: string, from: number): number {
  const specials = ['~~', '**', '*', '{'];
  let earliest = text.length;
  for (const marker of specials) {
    const index = text.indexOf(marker, from);
    if (index !== -1 && index < earliest) {
      earliest = index;
    }
  }
  return earliest;
}

function findClosingBrace(text: string, open: number): number {
  let depth = 0;
  for (let i = open; i < text.length; i++) {
    if (text[i] === '{') depth++;
    if (text[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function pushText(spans: RichSpan[], text: string, style: StyleFlags) {
  if (!text) return;
  spans.push({
    kind: 'text',
    text,
    ...(style.bold && { bold: true }),
    ...(style.italic && { italic: true }),
    ...(style.strike && { strike: true }),
    ...(style.color && style.color !== 'default' && { color: style.color }),
    ...(style.effect && { effect: style.effect }),
  });
}

function parseSegment(text: string, style: StyleFlags = {}): RichSpan[] {
  const spans: RichSpan[] = [];
  let pos = 0;

  while (pos < text.length) {
    if (text.startsWith('~~', pos)) {
      const end = text.indexOf('~~', pos + 2);
      if (end !== -1) {
        spans.push(
          ...parseSegment(text.slice(pos + 2, end), { ...style, strike: true }),
        );
        pos = end + 2;
        continue;
      }
    }

    if (text.startsWith('**', pos)) {
      const end = text.indexOf('**', pos + 2);
      if (end !== -1) {
        spans.push(
          ...parseSegment(text.slice(pos + 2, end), { ...style, bold: true }),
        );
        pos = end + 2;
        continue;
      }
    }

    if (text[pos] === '*' && text[pos + 1] !== '*') {
      const end = text.indexOf('*', pos + 1);
      if (end !== -1) {
        spans.push(
          ...parseSegment(text.slice(pos + 1, end), { ...style, italic: true }),
        );
        pos = end + 1;
        continue;
      }
    }

    if (text[pos] === '{') {
      const close = findClosingBrace(text, pos);
      if (close !== -1) {
        const inner = text.slice(pos + 1, close);
        const colon = inner.indexOf(':');
        if (colon !== -1) {
          const tag = inner.slice(0, colon);
          const content = inner.slice(colon + 1);

          if (
            tag === 'loader' &&
            LOADER_VARIANTS.has(content as LoaderVariant)
          ) {
            spans.push({ kind: 'loader', variant: content as LoaderVariant });
          } else if (TAG_STYLES[tag]) {
            spans.push(
              ...parseSegment(content, { ...style, ...TAG_STYLES[tag] }),
            );
          } else {
            pushText(spans, text.slice(pos, close + 1), style);
          }
          pos = close + 1;
          continue;
        }
      }
    }

    const next = findNextSpecial(text, pos);
    const chunk = text.slice(pos, next === pos ? pos + 1 : next);
    pushText(spans, chunk, style);
    pos = next === pos ? pos + 1 : next;
  }

  return spans;
}

export function parseRich(input: string): RichSpan[] {
  if (!input) return [];
  return parseSegment(input);
}
