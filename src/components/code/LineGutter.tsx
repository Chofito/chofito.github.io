type LineGutterProps = {
  lineNumber: number;
};

export function LineGutter({ lineNumber }: LineGutterProps) {
  return (
    <div className="w-8 shrink-0 pr-3 text-right leading-relaxed select-none text-terminal-dim">
      {lineNumber}
    </div>
  );
}
