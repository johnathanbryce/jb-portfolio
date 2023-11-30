'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ContentContextType = {
  activeContent: any;
  setActiveContent: (content: string | null) => void;
};

const ContentContext = createContext<ContentContextType>({
  activeContent: null,
  setActiveContent: () => {}, 
});

export const useControlContent = () => useContext(ContentContext);

// The ContentProvider.tsx context function:
export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  return (
    <ContentContext.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </ContentContext.Provider>
  );
}

