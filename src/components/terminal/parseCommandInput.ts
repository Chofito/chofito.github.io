export type CommandSegmentKind =
  | 'prompt'
  | 'command'
  | 'path'
  | 'flag'
  | 'plain';

export type CommandSegment = {
  text: string;
  kind: CommandSegmentKind;
};

function tokenize(input: string): string[] {
  const tokens: string[] = [];
  let i = 0;

  while (i < input.length) {
    if (input[i] === ' ') {
      let spaces = '';
      while (i < input.length && input[i] === ' ') {
        spaces += input[i++];
      }
      tokens.push(spaces);
      continue;
    }

    if (input[i] === '"' || input[i] === "'") {
      const quote = input[i];
      let str = quote;
      i++;
      while (i < input.length && input[i] !== quote) {
        str += input[i++];
      }
      if (i < input.length) {
        str += input[i++];
      }
      tokens.push(str);
      continue;
    }

    let word = '';
    while (i < input.length && input[i] !== ' ') {
      word += input[i++];
    }
    tokens.push(word);
  }

  return tokens;
}

function classifyToken(
  token: string,
  commandAssigned: boolean,
): CommandSegmentKind {
  if (!token.trim()) {
    return 'plain';
  }
  if (!commandAssigned) {
    return 'command';
  }
  if (token.startsWith('--') || /^-[a-zA-Z]/.test(token)) {
    return 'flag';
  }
  if (
    /^(\.\/|\.\.\/|\/|~)/.test(token) ||
    (token.includes('.') && !token.startsWith('-'))
  ) {
    return 'path';
  }
  return 'plain';
}

export function parseCommandInput(input: string): CommandSegment[] {
  const segments: CommandSegment[] = [];
  let rest = input;

  if (rest.startsWith('$')) {
    segments.push({ text: '$', kind: 'prompt' });
    rest = rest.slice(1);
  }

  let commandAssigned = false;

  for (const token of tokenize(rest)) {
    const kind = classifyToken(token, commandAssigned);
    if (kind === 'command') {
      commandAssigned = true;
    }
    segments.push({ text: token, kind });
  }

  return segments;
}
