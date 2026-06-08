import type { BrandColor } from './terminal/types';

/** Maps rich-markup tag names → SpanColor (also CSS `text-brand-*` suffix). */
export const BRAND_TAG_COLORS: Record<string, BrandColor> = {
  cursor: 'cursor',
  claude: 'claude',
  opencode: 'opencode',
  codex: 'codex',
  nextjs: 'nextjs',
  'react-native': 'react-native',
  expo: 'expo',
  typescript: 'typescript',
  wot: 'wot',
  babel: 'babel',
};

/**
 * Full, literal `text-brand-*` class names. These MUST be spelled out (not built
 * via `text-brand-${color}`) so Tailwind's source scanner can see and generate
 * them — dynamically constructed class strings are never emitted.
 */
const BRAND_TEXT_CLASS: Record<BrandColor, string> = {
  cursor: 'text-brand-cursor',
  claude: 'text-brand-claude',
  opencode: 'text-brand-opencode',
  codex: 'text-brand-codex',
  nextjs: 'text-brand-nextjs',
  'react-native': 'text-brand-react-native',
  expo: 'text-brand-expo',
  typescript: 'text-brand-typescript',
  wot: 'text-brand-wot',
  babel: 'text-brand-babel',
};

export const brandTextClass = (color: BrandColor): string =>
  BRAND_TEXT_CLASS[color];

/** Terminal link row label → brand color class. */
export const linkBrandClass: Record<string, string> = {
  email: 'text-brand-email',
  github: 'text-brand-github',
  x: 'text-brand-x',
  linkedin: 'text-brand-linkedin',
  'chofito.dev': 'text-brand-chofito',
};
