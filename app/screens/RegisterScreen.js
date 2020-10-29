import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    ImageBackground,
  } from 'react-native';
  import color from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppLogo from '../components/AppLogo';
import AppPicker from '../components/AppPicker';

const itemGender =  [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];
const itemGovernorate =[
  { label: 'Cairo', value: 'cairo' },
  { label: 'Giza', value: 'giza' },
  { label: 'Alex', value: 'alex' },
  { label: 'Assuit', value: 'assuit' },
]
function RegisterScreen(props) {
    return (
        <>
        <StatusBar hidden={true} />
      <SafeAreaView style={styles.containner}>
      <ScrollView style={styles.scrollContainer}>
       <AppLogo></AppLogo>
        <View style={styles.Formcontainner}>
        <ImageBackground resizeMode="stretch" style={styles.background} source={require('../assets/images/backGround.png')}> 
        <AppTextInput name="Full Name" secureTextEntry={false} keyboardType="default"></AppTextInput>
        <AppTextInput name="Birth Date" secureTextEntry={false} keyboardType="default"></AppTextInput>
        <AppTextInput name="Mobile" maxLength={11} secureTextEntry={false} keyboardType="numeric"></AppTextInput>
        <AppPicker name="Governorate" items={itemGovernorate}></AppPicker>
        <AppPicker name="Gender"  items={itemGender}></AppPicker>
        <AppTextInput name="Address" secureTextEntry={false} keyboardType="default"></AppTextInput>
        <AppTextInput name="Password" secureTextEntry={true} keyboardType="default"></AppTextInput>
        <AppTextInput name="Confirm Password"  secureTextEntry={true} keyboardType="default"></AppTextInput>
        <AppButton title="Register"></AppButton>
       </ImageBackground>      
       </View>
       </ScrollView>
      </SafeAreaView> 
      </>
    );
}
const styles = StyleSheet.create({
    containner: {
        flex: 1,
        backgroundColor:color.primary,
        flexDirection:"column",
        alignItems:"center",
        paddingVertical:"9%"
      },
     Formcontainner:{
       width:"100%",
       paddingTop:"9%"
     },
     background:{
     alignItems:"center",
     },
     scrollContainer:{
       width:"100%"
     }
})
export default RegisterScreen;