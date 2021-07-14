import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //for (let i = 0; i < 1000; i++) { console.log('Loop:' + i) }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme='dark' />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
