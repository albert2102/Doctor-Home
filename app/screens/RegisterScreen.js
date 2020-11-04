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
import AppDatePicker from '../components/AppDatePicker';
import { useNavigation } from '@react-navigation/native';

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
function RegisterScreen({navigation}) {
    return (
        <>
        <StatusBar hidden={true} />
      <SafeAreaView style={styles.containner}>
       <AppLogo></AppLogo>
        <View style={styles.Formcontainner}>
        <ImageBackground resizeMode="stretch" style={styles.background} source={require('../assets/images/backGround.png')}> 
        <AppTextInput name="Full Name" secureTextEntry={false} keyboardType="default"></AppTextInput>
        <AppDatePicker></AppDatePicker>
        <AppTextInput name="Mobile" maxLength={11} secureTextEntry={false} keyboardType="numeric"></AppTextInput>
        <AppPicker name="Governorate" items={itemGovernorate}></AppPicker>
        <AppPicker name="Gender"  items={itemGender}></AppPicker>
        <AppTextInput name="Address" secureTextEntry={false} keyboardType="default"></AppTextInput>
        <AppTextInput name="Password" secureTextEntry={true} keyboardType="default"></AppTextInput>
        <AppTextInput name="Confirm Password"  secureTextEntry={true} keyboardType="default"></AppTextInput>
        <AppButton  pb="1.5%"pt="1%" onPress={()=>{navigation.push("ConfirmCode")}} title="Register"></AppButton>
       </ImageBackground>      
       </View>
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
        paddingVertical:"3%"
      },
     Formcontainner:{
       width:"100%",
       paddingTop:"3%"
     },
     background:{
     alignItems:"center",
     },
     scrollContainer:{
       width:"100%"
     }
})
export default RegisterScreen;

