type ListLineProps = {
  items: readonly string[];
};

export function ListLine({ items }: ListLineProps) {
  return (
    <div className="font-mono text-sm text-terminal-green space-y-0.5">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
