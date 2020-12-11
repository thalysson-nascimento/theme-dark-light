import React, { createContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';
import usePersistedState from '../usePersistedThemeState';


const defaultMode = lightTheme.type;

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: mode => console.log(mode)
});

const ManageThemeProvider: React.FC = ({ children }) => {
  const [state, setState] = usePersistedState('theme', defaultMode);

  const setMode = mode => {
    setState(mode);
  };

  return (
    <ThemeContext.Provider value={{ mode: state, setMode }}>
      <ThemeProvider
        theme={state === 'dark' ? darkTheme.theme : lightTheme.theme}>
        <>
          <StatusBar
            barStyle={state === 'light' ? 'dark-content' : 'light-content'}
            backgroundColor={
              state === 'light' ? 
              lightTheme.theme.backgroundAlt:
              darkTheme.theme.backgroundAlt
            }
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default ManageThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);
