import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for context values
type TabContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

type DrawerContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TabContext = createContext<TabContextType | undefined>(undefined);
const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const tabContextValue = { activeTab, setActiveTab };

  return (
    <TabContext.Provider value={tabContextValue}>
      {children}
    </TabContext.Provider>
  );
};

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const drawerContextValue = { open, setOpen };

  return (
    <DrawerContext.Provider value={drawerContextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabProvider');
  }
  return context;
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
