/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AsyncStorage, LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
 import { createDrawerNavigator } from '@react-navigation/drawer';
//import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React,{useState,useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage1 from '@react-native-async-storage/async-storage'
import PushNotification from "react-native-push-notification";
import Feather from "react-native-vector-icons/Feather"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Button,
  Modal,
  Platform,
  Linking,
  RefreshControl,
  FlatList,
  TextInput,
  Pressable,
  Image

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import fav from './fav.jpeg'
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import Home from './src/Views/Home';
import Create from './src/Views/Create';
import Update from './src/Views/Update';


  


const Stack =createStackNavigator()
const Tab = createBottomTabNavigator()



const App = () => {


  return (
 
     <NavigationContainer>
    <Tab.Navigator
    initialRouteName='home'
    screenOptions={({route})=>({
      tabBarIcon:({color})=>{
        let iconName
        if(route.name =="home")
        {
          iconName="home"
        }else if(route.name =="create"){
          iconName="plus-circle"
        }else if(route.name =="update"){
          iconName="file-plus"
        }
        return <Feather name={iconName} size={20} color={"black"} />
      }
    })}

    tabBarOptions={{
      activeTintColor:"tomato",
      inactiveTintColor:"gray",
       labelStyle:{
         fontSize:15
       }
    
    }}
    >
     
    <Tab.Screen
      name="home"
      component={Home}
    />

    <Tab.Screen
      name="create"
      component={Create}
    />

   
    
      
    </Tab.Navigator>
  </NavigationContainer>
 
     
  )
}

export default App

