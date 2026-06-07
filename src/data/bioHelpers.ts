export function resolveLinkHref(label: string, value: string): string {
  if (label === 'email' && !value.startsWith('mailto:')) {
    return `mailto:${value}`;
  }
  return value;
}

export function toLinkEntries(
  links: Record<string, string>,
): { label: string; href: string }[] {
  return Object.entries(links).map(([label, href]) => ({
    label,
    href: resolveLinkHref(label, href),
  }));
}
