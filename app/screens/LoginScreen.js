import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    StatusBar,
    ImageBackground,
  } from 'react-native';
  import color from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppLogo from '../components/AppLogo';
import AppTextInputWithIcon from '../components/AppTextInputWithIcon';
import AppRegisterButton from '../components/AppRegisterButton';
function LoginScreen(props) {
    return (
        <>
        <StatusBar hidden={true} />
      <SafeAreaView style={styles.containner}>
      <ScrollView style={styles.scrollContainer}>
       <AppLogo></AppLogo>
       <View style={styles.hintRegisterView}>
       <Text style={styles.hintRegisterText}>Enter your rgistered mobile number and password</Text>
       </View>
        <View style={styles.Formcontainner}>
        <ImageBackground resizeMode="stretch" style={styles.background} source={require('../assets/images/backGround.png')}> 
        <AppTextInputWithIcon name="Mobile Number" maxLength={11} secureTextEntry={false} keyboardType="numeric" iconName="screen-smartphone"></AppTextInputWithIcon>
        <AppTextInputWithIcon name="Password"  secureTextEntry={true}  iconName="lock"></AppTextInputWithIcon>
        <AppButton m="9%" title="LOGIN" fontSize={23}></AppButton>
        <Text style={styles.orText}>OR</Text>
        <AppRegisterButton></AppRegisterButton>
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
       paddingTop:"4%"
     },
     background:{
     alignItems:"center",
     },
     scrollContainer:{
       width:"100%",
    },
     orText:{
         fontSize:27,
         fontFamily:"Myriad-Roman-Regular",
         color:color.iconColor,
         marginTop:"10%"
     },
     hintRegisterView:{
        alignItems:"center"
     },
     hintRegisterText:{
         color:color.secodery,
         fontFamily:"MuktaMahee-Medium",
         fontSize:20,
         textAlign:"center",
         width:"70%",
     }
})
export default LoginScreen;