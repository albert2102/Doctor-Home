/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigation';
import AppNavigator from './app/navigation/AppNavigator';
const Login =()=>(
  <LoginScreen></LoginScreen>
);
const Register = () =>(
  <RegisterScreen></RegisterScreen>
);
//stack navigator
//tap navigator

const App = () => {
  return (
    <>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </>
  );
};


export default App;
