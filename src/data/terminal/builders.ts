import { toLinkEntries } from '../bioHelpers';
import { profile } from '../profile';
import { terminalConfig } from './config';
import { parseRich } from './parseRich';
import type { LoaderVariant, OutputLine, TerminalCommand } from './types';

const profileLinkEntries = toLinkEntries(profile.links);

export function rich(
  strings: TemplateStringsArray,
  ...values: (string | number)[]
): OutputLine {
  const raw = strings.reduce(
    (acc, part, i) => acc + part + (values[i] ?? ''),
    '',
  );
  return { type: 'rich', spans: parseRich(raw) };
}

export function richStr(value: string): OutputLine {
  return { type: 'rich', spans: parseRich(value) };
}

export function blank(): OutputLine {
  return { type: 'blank' };
}

export function links(): OutputLine {
  return { type: 'links', items: profileLinkEntries };
}

export function loader(variant: LoaderVariant, label?: string): OutputLine {
  return { type: 'loader', variant, label };
}

export function list(items: readonly string[]): OutputLine {
  return { type: 'list', items };
}

export function neofetchRow(
  label: string,
  markup: string,
  labelWidth: number,
): OutputLine {
  const padded = `${label}:`.padEnd(labelWidth, ' ');
  return richStr(`${padded} ${markup}`);
}

export function neofetchFromConfig(): OutputLine[] {
  const labelWidth = Math.max(
    ...terminalConfig.neofetch.map(([label]) => label.length + 1),
  );

  return terminalConfig.neofetch.map(([label, markup]) =>
    neofetchRow(label, markup, labelWidth),
  );
}

export function cmd(input: string, ...lines: OutputLine[]): TerminalCommand {
  return { input, lines };
}
