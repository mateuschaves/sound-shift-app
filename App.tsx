import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

import Colors from '~/theme/colors';
import RootStack from '~/navigation/RootStack.navigation';

const theme: DefaultTheme = {
  colors: Colors,
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
