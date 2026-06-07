import { type KeyboardEvent, useRef } from 'react';

export type TabItem = {
  id: string;
  label: string;
};

type TabBarProps = {
  tabs: TabItem[];
  activeTab: string;
  onSelect: (id: string) => void;
};

export function TabBar({ tabs, activeTab, onSelect }: TabBarProps) {
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  const focusTab = (id: string) => {
    tabRefs.current.get(id)?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    onSelect(nextTab.id);
    focusTab(nextTab.id);
  };

  return (
    <div
      className="flex border-b border-editor-border bg-editor-tab-inactive"
      role="tablist"
      aria-label="Editor tabs"
    >
      {tabs.map((tab, index) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            ref={(element) => {
              if (element) {
                tabRefs.current.set(tab.id, element);
              } else {
                tabRefs.current.delete(tab.id);
              }
            }}
            type="button"
            role="tab"
            tabIndex={isActive ? 0 : -1}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onSelect(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={[
              'px-4 py-2 text-sm font-mono transition-colors border-b-2 -mb-px',
              isActive
                ? 'bg-editor-tab-active text-gray-100 border-editor-accent'
                : 'bg-transparent text-terminal-dim border-transparent hover:text-gray-300',
            ].join(' ')}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
