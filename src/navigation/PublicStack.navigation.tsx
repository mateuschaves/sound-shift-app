import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '~/screens/SignInScreen';

const Stack = createNativeStackNavigator();

function PublicStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
  );
}

export default PublicStack;