import React from 'react';
import ManageThemeProvider from '../ManageThemeProvider';

const ThemeManager: React.FC = ({ children }) => {
  return (
    <ManageThemeProvider>{children}</ManageThemeProvider>
  );
}

export default ThemeManager;