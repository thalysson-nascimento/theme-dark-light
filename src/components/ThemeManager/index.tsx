import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import ManageThemeProvider from '../ManageThemeProvider';

const ThemeManager: React.FC = ({ children }) => {
  return (
    <AppearanceProvider>
      <ManageThemeProvider>{children}</ManageThemeProvider>
    </AppearanceProvider>
  );
}

export default ThemeManager;