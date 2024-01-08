import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigation from './src/naviation/AppNavigation'
import { myFetchGetRequest } from './src/ApisRequest/MyFetchApiRequest'

export default function App() {

  return (
    <AppNavigation/>
  )
}