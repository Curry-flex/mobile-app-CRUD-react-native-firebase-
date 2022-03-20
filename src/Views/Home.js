import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Update from './Update'
import Feed from './Feed'

const Stack =createStackNavigator()
export default function Home() {
  return (
    <Stack.Navigator
    initialRouteName='feed'
    screenOptions={{
        headerShown:false
    }}
    >
        <Stack.Screen 
        name='feed'
        component={Feed}
        />

        <Stack.Screen 
        name='update'
        component={Update}
        />

      
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})