type LinkLineProps = {
  label: string;
  href: string;
};

export function LinkLine({ label, href }: LinkLineProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="font-mono text-sm text-editor-accent hover:text-terminal-green transition-colors underline-offset-2 hover:underline"
    >
      {label}
    </a>
  );
}
