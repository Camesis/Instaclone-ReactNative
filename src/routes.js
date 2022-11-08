import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../src/screens/HomeScreen";
import NewPostScreen from "../src/screens/NewPostScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export const SignedInStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     initialRouteName='HomeScreen'>

      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export const SignedOutStack = () => (
  <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
   initialRouteName='LoginScreen'>

    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
  </Stack.Navigator>
</NavigationContainer>

)

