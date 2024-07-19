import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '~/screens/SignInScreen';
import HomeScreen from '~/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function PublicStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
  );
}

export default PublicStack;