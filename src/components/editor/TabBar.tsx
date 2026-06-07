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
  return (
    <div
      className="flex border-b border-editor-border bg-editor-tab-inactive"
      role="tablist"
      aria-label="Editor tabs"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onSelect(tab.id)}
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
