import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistedThemeState = async (key: string, state: any) => {
  try {
    const persisted = await AsyncStorage.setItem(key, state);
    return persisted;
  } catch (e) {
    return console.log(e);
  }
}

const getPersistedThemeState = async (key: string, initialStateValue: any) => {
  try {
    const storeDate = await AsyncStorage.getItem(key);

    if (storeDate === null) {
      return initialStateValue;
    }

    if (storeDate) {
      return storeDate;
    } else {
      return initialStateValue;
    }
  } catch (e) {
    return console.log(e);
  }
}

const usePersistedState = (key: string, initialValue: any) => {
  const [state, setState] = useState(initialValue);

  const getPersisted = async () => {
    const getPersistedTheme = await getPersistedThemeState(key, initialValue);
    setState(getPersistedTheme);
  }

  useEffect(() => {
    getPersisted();
  }, []);
  
  const persisted = async () => {
    await persistedThemeState(key, state);
  }

  useEffect(() => {
    persisted();
  }, [state]);
  
  return [state, setState];
}

export default usePersistedState;
