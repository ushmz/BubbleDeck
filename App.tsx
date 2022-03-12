import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppBar } from './src/components/Header';
import { ToggleColorModeButton } from './src/components/ToggleColorModeButton';
import { Tweet } from './src/components/Tweet';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppBar />
      <Text>Open up App.tsx to start working on your app!</Text>
      <ToggleColorModeButton />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </NativeBaseProvider>
  );
}

const theme = extendTheme({});
