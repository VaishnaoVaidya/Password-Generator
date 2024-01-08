import {Image} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import BgChanger from '../screens/BgChanger';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Bottom.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#6A89CC',
      tabBarInactiveTintColor: '#A09F9F',
      tabBarActiveBackgroundColor: '#A09F9F',
      tabBarInactiveBackgroundColor: '#1a3c43',
      tabBarHideOnKeyboard: true,
      tabBarstyle: {
          backgroundColor: 'white',
          paddingBottom: 3
      }
   }}
    >
      <Bottom.Screen
        name="MainScreen"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/logo.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#6A89CC' : '#A09F9F',
                }}
              />
            );
          },
        }}
      />
       <Bottom.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/mobile.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#6A89CC' : '#A09F9F',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="BgChanger"
        component={BgChanger}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/name.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#6A89CC' : '#A09F9F',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;
