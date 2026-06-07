import type { ReactNode } from 'react';

type TabPanelProps = {
  tabId: string;
  activeTab: string;
  children: ReactNode;
};

export function TabPanel({ tabId, activeTab, children }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={`panel-${tabId}`}
      aria-labelledby={`tab-${tabId}`}
      hidden={activeTab !== tabId}
      className="scroll-safe absolute inset-0 overflow-y-auto scroll-smooth"
    >
      {children}
    </div>
  );
}
