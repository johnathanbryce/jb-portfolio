'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

type ContentContextType = {
  activeContent: string | null;
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

  const updateCSSVariables = (newColors: any) => {
    const root = document.documentElement;
    Object.keys(newColors).forEach(key => {
      console.log(key)
      root.style.setProperty(key, newColors[key]);
    });
  };

  const changeTheme = (theme: any) => {
    // Define logic to update CSS variables
    const newColors = {
      '--accent-primary': theme.primaryColor,
      '--accent-secondary': theme.secondaryColor,
      // ...other variables
    };
    updateCSSVariables(newColors);
  };



  return (
    <ContentContext.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </ContentContext.Provider>
  );
}

