import { bioCodeLines } from '../../data/bioCode';
import { CodeEditor } from './CodeEditor';

export function BioTab() {
  return <CodeEditor lines={bioCodeLines} />;
}
