/**
 * Sine-wave text: each character bobs vertically on a staggered delay, so a wave
 * travels across the word. Pure CSS (`wave-char` / `wave-bob`); rests flat under
 * `prefers-reduced-motion` via the media query in index.css.
 */

type WaveTextProps = {
  text: string;
  className?: string;
};

export function WaveText({ text, className = '' }: WaveTextProps) {
  return (
    <span className={className}>
      {[...text].map((char, index) =>
        char === ' ' ? (
          <span key={index}> </span>
        ) : (
          <span
            key={index}
            className="wave-char"
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            {char}
          </span>
        ),
      )}
    </span>
  );
}
