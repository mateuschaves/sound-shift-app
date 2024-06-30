import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as SplashScreenExpo from 'expo-splash-screen';

SplashScreenExpo.preventAutoHideAsync();


export default function SplashScreen() {
    useEffect(() => {
        setTimeout(() => {
        SplashScreenExpo.hideAsync();
        }, 3000)
    }, [])

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}