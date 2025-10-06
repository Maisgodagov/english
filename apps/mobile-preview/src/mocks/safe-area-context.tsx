import type { ReactNode } from 'react';
import React from 'react';

const SafeAreaContext = React.createContext({
  insets: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const SafeAreaProvider = ({ children }: { children: ReactNode }) => (
  <SafeAreaContext.Provider value={{ insets: { top: 0, right: 0, bottom: 0, left: 0 } }}>
    {children}
  </SafeAreaContext.Provider>
);

export const useSafeAreaInsets = () => ({ top: 0, right: 0, bottom: 0, left: 0 });

export const SafeAreaView = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={style}>{children}</div>
);

export const SafeAreaConsumer = SafeAreaContext.Consumer;
