import type { ReactNode } from 'react';
import { useState } from 'react';
import { BioTab } from './components/code/BioTab';
import { EditorWindow } from './components/editor/EditorWindow';
import { TabPanel } from './components/editor/TabPanel';
import { TerminalTab } from './components/terminal/TerminalTab';

const TABS = [
  { id: 'terminal', label: 'Terminal' },
  { id: 'bio', label: 'bio.ts' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const STORAGE_KEY = 'chofito-active-tab';

const TAB_CONTENT: Record<TabId, (isActive: boolean) => ReactNode> = {
  terminal: (isActive) => <TerminalTab isActive={isActive} />,
  bio: () => <BioTab />,
};

function getInitialTab(): TabId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'terminal' || stored === 'bio') {
      return stored;
    }
  } catch {
    // private browsing or disabled storage
  }
  return 'terminal';
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);

  const handleTabChange = (id: string) => {
    const tab = id as TabId;
    setActiveTab(tab);
    try {
      localStorage.setItem(STORAGE_KEY, tab);
    } catch {
      // private browsing or disabled storage
    }
  };

  return (
    <div className="app-shell bg-[radial-gradient(ellipse_at_top,_#1a1a2e_0%,_#0a0a0f_70%)]">
      <EditorWindow
        title="chofito — zsh"
        tabs={[...TABS]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      >
        {TABS.map((tab) => (
          <TabPanel key={tab.id} tabId={tab.id} activeTab={activeTab}>
            {TAB_CONTENT[tab.id](activeTab === tab.id)}
          </TabPanel>
        ))}
      </EditorWindow>
    </div>
  );
}

export default App;
