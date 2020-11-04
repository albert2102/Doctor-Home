import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
const Stack = createStackNavigator();
const HomeServicesNavigator = ()=>{
  return (
  <Stack.Navigator
  screenOptions={{
    headerShown:false
  }}
  >
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Services" component={ServicesScreen} />
  </Stack.Navigator>
)};

export default HomeServicesNavigator;