import 'react-native-gesture-handler';
import React from 'react';
import ThemeManager from './components/ThemeManager';

import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <ThemeManager>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeManager>
  );
}

export default App;