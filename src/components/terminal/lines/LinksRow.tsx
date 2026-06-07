import { LinkLine } from './LinkLine';

type LinksRowProps = {
  items: readonly { label: string; href: string }[];
};

export function LinksRow({ items }: LinksRowProps) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 pl-2 pt-1">
      {items.map((item) => (
        <LinkLine key={item.label} label={item.label} href={item.href} />
      ))}
    </div>
  );
}
