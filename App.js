import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ViewScreen from './components/ViewScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='ViewScreen' component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
