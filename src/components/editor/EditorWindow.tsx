import type { ReactNode } from 'react';
import { TabBar, type TabItem } from './TabBar';

type EditorWindowProps = {
  title: string;
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  children: ReactNode;
};

export function EditorWindow({
  title,
  tabs,
  activeTab,
  onTabChange,
  children,
}: EditorWindowProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-editor-border bg-editor-surface shadow-2xl shadow-black/40 md:h-[min(75vh,720px)] md:max-w-3xl md:shrink-0">
      <div className="flex shrink-0 items-center gap-3 px-4 py-3 border-b border-editor-border bg-editor-panel">
        <div className="flex gap-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center text-xs font-mono text-terminal-dim truncate">
          {title}
        </span>
        <span className="w-14" aria-hidden="true" />
      </div>

      <div className="shrink-0">
        <TabBar tabs={tabs} activeTab={activeTab} onSelect={onTabChange} />
      </div>

      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}
