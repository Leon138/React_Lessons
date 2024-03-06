import React, { useState } from 'react';

interface IThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<IThemeContext['theme']>('light');

  // const backgroundColor = theme === 'light' ? '#313131' : '#6e2bb1';
  // document.body.style.backgroundColor = backgroundColor;

  document.getElementById('root').style.backgroundColor = theme === 'light' ? '#fff' : '#6e2bb1';

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else setTheme('light');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
