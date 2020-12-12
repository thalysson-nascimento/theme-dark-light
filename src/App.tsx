import 'react-native-gesture-handler';
import React from 'react';
import Home from './screen/Home';
import ThemeManager from './components/ThemeManager';

const App: React.FC = () => {
  return(
    <ThemeManager>
      <Home />
    </ThemeManager>
  );
}

export default App;