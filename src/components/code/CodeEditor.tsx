import type { CodeLine } from '../../data/bioCode';
import { LineGutter } from './LineGutter';
import { SyntaxLine } from './SyntaxLine';

const INDENT_CH = 2;

type CodeEditorProps = {
  lines: CodeLine[];
};

export function CodeEditor({ lines }: CodeEditorProps) {
  return (
    <div className="content-safe-bottom p-4 font-mono text-sm leading-relaxed tabular-nums">
      {lines.map((line, index) => (
        <div key={index} className="flex min-w-0 items-start">
          <LineGutter lineNumber={index + 1} />
          <div
            className="min-w-0 flex-1 overflow-x-hidden"
            style={{ paddingLeft: `${(line.indent ?? 0) * INDENT_CH}ch` }}
          >
            <SyntaxLine tokens={line.tokens} />
          </div>
        </div>
      ))}
    </div>
  );
}
