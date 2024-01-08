import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Splash from '../screens/Splash'
import Contact from '../screens/Contact'
import AddContact from '../screens/AddContact'
import Main from '../screens/Main'
import Home from '../screens/Home'
import BgChanger from '../screens/BgChanger'


// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= "Splash"
          component={Splash}
          options={{headerShown: false}}
        /> 
         <Stack.Screen
          name= "Main"
          component={Main}
          navigationOptions={{
            title:"Welcome",
          }}
        /> 
        <Stack.Screen
          name= "Home"
          component={Home}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name= "BgChanger"
          component={BgChanger}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name= "Contact"
          component={Contact}
          options={{headerShown: false}}
        />  
        <Stack.Screen
          name= "AddContact"
          component={AddContact}
          options={{headerShown: true}}
        /> 
        <Stack.Screen
          name= "Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name= "Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})