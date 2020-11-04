import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack'
import AppNavigator from './AppNavigator';
import ConfirmationCodeScreen from '../screens/ConfirmationCodeScreen';

const Stack = createStackNavigator();
const AuthNavigator = ()=>{
  return (
  <Stack.Navigator
  screenOptions={{
    headerShown:false
  }}
  >
    <Stack.Screen  name="Login" component={LoginScreen}/>
    <Stack.Screen  name="Register" component={RegisterScreen}/>
    <Stack.Screen name="ConfirmCode" component={ConfirmationCodeScreen}/>
  </Stack.Navigator>
)};

export default AuthNavigator;