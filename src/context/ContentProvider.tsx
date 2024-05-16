'use client'
import React, { createContext, useContext, useState } from 'react';

type ContentContextType = {
  activeTechStack: string[]; 
  activeContent: string | null;
  setActiveContent: (content: string | null) => void;
  setActiveTechStack: (techStack: string[]) => void; 
};

const ContentContext = createContext<ContentContextType>({
  activeTechStack: [],
  activeContent: null,
  setActiveContent: () => {}, 
  setActiveTechStack: () => {}, 
});

export const useControlContent = () => useContext(ContentContext);

// The ContentProvider.tsx context function:
export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [activeContent, setActiveContent] = useState<string | null>(null);
  const [activeTechStack, setActiveTechStack] = useState<string[]>([])

  return (
    <ContentContext.Provider value={{activeContent, setActiveContent, activeTechStack, setActiveTechStack }}>
      {children}
    </ContentContext.Provider>
  );
}

