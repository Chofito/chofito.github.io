/**
 * Terminal copy + rich markup — independent from profile.ts.
 * Edit shaders/effects here without touching the bio tab.
 */
export const terminalConfig = {
  whoami: '{glow:**Chofito**} {dim:—} Rodolfo Robles',

  hostname: '{glitch:myroom.local} {dim:▸} {accent:Guatemala}',

  motd: [
    '{glow:Building ecommerce} at {accent:MAX} {dim:— Largest ecommerce & marketplace in Guatemala}',
    'Deep into {shimmer:AI & LLMs} {dim:for dev workflows}',
    "{dim:Daily drivers:} {accent:Cursor}{dim:, }{accent:Claude Code}{dim:, }{accent:OpenCode}{dim:, }{accent:Codex} {dim:(I don't care, is funny to have a lot of agents)}",
  ],

  uptime:
    'in tech since {accent:2018} {dim:—} {shimmer:**8+ years**} {dim:and counting}',

  history: [
    '{dim:2012 - present}  {accent:weirdo linux user}',
    '{dim:2018 - 2021}  {accent:native mobile developer}',
    '{dim:2019 - 2021}  {accent:react + django}',
    '{dim:2021 - 2024}  {accent:full-stack react}',
    '{dim:2024 - 2025}  {accent:next.js}',
    '{dim:2025 - 2026}  {glow:next.js + react native / expo} {shimmer:← you are here}',
  ],

  neofetchLoader: {
    variant: 'braille' as const,
    label: 'fetching system info',
  },

  neofetch: [
    ['OS', '{accent:MacOS, Manjaro & Windows (why not?)}'],
    ['Role', '{glow:**Software Architect**} @ {accent:Distelsa S.A.}'],
    [
      'Stack',
      '{accent:Next.js}{dim: · }{accent:React Native}{dim: · }{accent:Expo}{dim: · }{accent:TypeScript}',
    ],
    ['Focus', '{shimmer:Building random opensource projects :P}'],
    ['Currently Reading', '{amber:The Wheel of Time and Babel}'],
    ['Reads', '{dim:fantasy · sci-fi}'],
    ['Location', '{accent:Guatemala} {dim:🇬🇹}'],
  ],

  interests:
    '{amber:gaming} {dim:·} {accent:fantasy books} {dim:·} {shimmer:space & sci-fi aesthetics} {dim:·} {glow:retro terminals}',

  echo: "{dim:that's all for now} {shimmer:✦} {glow:— see you in the commits}",
} as const;
