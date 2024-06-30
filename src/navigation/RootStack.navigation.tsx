import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicStack from './PublicStack.navigation';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
            options={{ headerShown: false }}
            name='PublicStack' 
            component={PublicStack} 
        />
      </Stack.Navigator>
  );
}

export default RootStack;