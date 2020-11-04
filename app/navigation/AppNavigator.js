import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  color  from '../config/colors';
import Icon from 'react-native-vector-icons/Feather';
import More from 'react-native-vector-icons/Ionicons';
import File from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/LoginScreen';
import TabStyle from './NewTabStyling';
import AuthNavigator from './AuthNavigation';
import {strings } from '../utiles/language';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeServicesNavigator from './HomeServicesNavigator';

const Tap = createBottomTabNavigator();
const AppNavigator = ({flag})=>(
  <Tap.Navigator
  tabBarOptions={{
    activeBackgroundColor:color.tabColor,
    inactiveBackgroundColor:color.tabColor,
    activeTintColor:color.iconColor,
    inactiveTintColor:color.green,
    safeAreaInsets:{
      bottom:5
    },
    labelStyle: {
      fontSize: 12,
    }, 
  tabStyle:{
    paddingTop:"1%",
  },
  style:{
   paddingBottom:"0.7%"
  }
  }}

  >
    <Tap.Screen name={strings("myRequests")} options={{tabBarVisible:flag,tabBarIcon:({size,color})=><File name="file-document-edit-outline" size={size} color={color}/>}} component={AuthNavigator}/>
    <Tap.Screen name={strings("Offers")}options={{tabBarIcon:({size,color})=><Icon name="settings" size={size} color={color}/>}} component={LoginScreen}/>
    <Tap.Screen name={strings("Home")} options={{tabBarIcon:({size,color})=><Icon name="home" size={size} color={color}/>}}  component={HomeServicesNavigator}/>
    <Tap.Screen name={strings("Contact")} options={{tabBarIcon:({size,color})=><Icon name="phone-call" size={size} color={color}/>}} component={LoginScreen}/>
    <Tap.Screen name={strings("More")} options={{tabBarIcon:({size,color})=><More name="ellipsis-horizontal-outline" size={size} color={color}/>}} component={LoginScreen}/>
  </Tap.Navigator>
);

export default AppNavigator;