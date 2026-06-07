import type { SyntaxToken } from '../../data/bioCode';

const tokenColors: Record<SyntaxToken['kind'], string> = {
  keyword: 'text-syntax-keyword',
  string: 'text-syntax-string',
  comment: 'text-syntax-comment',
  property: 'text-syntax-property',
  plain: 'text-gray-300',
  punctuation: 'text-syntax-punctuation',
  number: 'text-syntax-number',
};

type SyntaxLineProps = {
  tokens: SyntaxToken[];
};

export function SyntaxLine({ tokens }: SyntaxLineProps) {
  if (tokens.length === 0) {
    return <span>&nbsp;</span>;
  }

  return (
    <span className="whitespace-pre-wrap break-normal">
      {tokens.map((token, index) => {
        const className = tokenColors[token.kind];

        if (token.href) {
          return (
            <a
              key={index}
              href={token.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${className} hover:underline underline-offset-2`}
            >
              {token.value}
            </a>
          );
        }

        return (
          <span key={index} className={className}>
            {token.value}
          </span>
        );
      })}
    </span>
  );
}
