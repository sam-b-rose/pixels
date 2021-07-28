import { createContext, useContext, ReactNode } from 'react';
import { ThemeType } from '../constants';

type Theme = Partial<ThemeType>;

export const ThemeContext = createContext<Theme>({});
export const useTheme = () => useContext(ThemeContext);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

const ThemeProvider = ({ children, theme = {} }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
