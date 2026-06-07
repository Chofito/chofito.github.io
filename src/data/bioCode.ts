import { resolveLinkHref } from './bioHelpers';
import { profile } from './profile';

export type SyntaxTokenKind =
  | 'keyword'
  | 'string'
  | 'comment'
  | 'property'
  | 'plain'
  | 'punctuation'
  | 'number';

export type SyntaxToken = {
  kind: SyntaxTokenKind;
  value: string;
  href?: string;
};

export type CodeLine = {
  indent?: number;
  tokens: SyntaxToken[];
};

const kw = (value: string): SyntaxToken => ({ kind: 'keyword', value });
const str = (value: string, href?: string): SyntaxToken => ({
  kind: 'string',
  value,
  href,
});
const comment = (value: string): SyntaxToken => ({ kind: 'comment', value });
const prop = (value: string): SyntaxToken => ({ kind: 'property', value });
const plain = (value: string): SyntaxToken => ({ kind: 'plain', value });
const punct = (value: string): SyntaxToken => ({ kind: 'punctuation', value });
const num = (value: string): SyntaxToken => ({ kind: 'number', value });

const line = (indent: number, tokens: SyntaxToken[]): CodeLine => ({
  indent,
  tokens,
});
const blank = (): CodeLine => line(0, []);

const isIdentifierKey = (key: string) => /^[a-zA-Z_$][\w$]*$/.test(key);

function keyToken(key: string): SyntaxToken {
  return isIdentifierKey(key) ? prop(key) : str(`'${key}'`);
}

function stringField(key: string, value: string, indent = 1): CodeLine {
  return line(indent, [prop(key), punct(': '), str(`'${value}'`), punct(',')]);
}

function arrayBlock(key: string, items: readonly string[]): CodeLine[] {
  return [
    line(1, [prop(key), punct(': '), punct('[')]),
    ...items.map((item) => line(2, [str(`'${item}'`), punct(',')])),
    line(1, [punct('],')]),
    blank(),
  ];
}

function linksBlock(): CodeLine[] {
  return [
    line(1, [prop('links'), punct(': '), punct('{')]),
    ...Object.entries(profile.links).map(([key, href]) =>
      line(2, [
        keyToken(key),
        punct(': '),
        str(`'${href}'`, resolveLinkHref(key, href)),
        punct(','),
      ]),
    ),
    line(1, [punct('},')]),
    blank(),
  ];
}

function buildBioCodeLines(): CodeLine[] {
  return [
    line(0, [comment('// bio.ts — exported profile')]),
    blank(),
    line(0, [
      kw('export'),
      plain(' '),
      kw('const'),
      plain(' '),
      prop('profile'),
      plain(' '),
      punct('='),
      plain(' '),
      punct('{'),
    ]),
    stringField('name', profile.name),
    stringField('alias', profile.alias),
    stringField('location', profile.location),
    stringField('os', profile.os),
    line(1, [
      prop('since'),
      punct(': '),
      num(String(profile.since)),
      punct(','),
    ]),
    stringField('role', profile.role),
    blank(),
    line(1, [prop('company'), punct(': '), punct('{')]),
    stringField('name', profile.company.name, 2),
    line(2, [
      prop('url'),
      punct(': '),
      str(`'${profile.company.url}'`, profile.company.url),
      punct(','),
    ]),
    stringField('note', profile.company.note, 2),
    stringField('parent', profile.company.parent, 2),
    line(1, [punct('},')]),
    blank(),
    ...arrayBlock('journey', profile.journey),
    ...arrayBlock('stack', profile.stack),
    ...arrayBlock('currently', profile.currently),
    stringField('focus', profile.focus),
    stringField('currentlyReading', profile.currentlyReading),
    ...arrayBlock('interests', profile.interests),
    ...arrayBlock('reads', profile.reads),
    ...linksBlock(),
    line(0, [punct('} '), kw('as'), plain(' '), kw('const'), punct(';')]),
  ];
}

export const bioCodeLines = buildBioCodeLines();
