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
import AppButton from '../components/AppButton';
import AppLogo from '../components/AppLogo';
import AppTextInputWithIcon from '../components/AppTextInputWithIcon';
import AppRegisterButton from '../components/AppRegisterButton';
import {strings,isRTL } from '../utiles/language'
import AppNavigator from '../navigation/AppNavigator';
console.log('====================================');
console.log(isRTL);
console.log('====================================');
function LoginScreen({navigation}) {
    return (
        <>
        <StatusBar hidden={true} />
      <SafeAreaView style={styles.containner}>
       <AppLogo></AppLogo>
       <View style={styles.hintRegisterView}>
       <Text style={styles.hintRegisterText}>{strings('hint')}</Text>
       </View>
        <View style={styles.Formcontainner}>
        <ImageBackground resizeMode="stretch" style={styles.background} source={require('../assets/images/backGround.png')}> 
        <AppTextInputWithIcon m="7%" style={styles.mobile} name="mobilenumber" maxLength={11} secureTextEntry={false} keyboardType="numeric" iconName="screen-smartphone"></AppTextInputWithIcon>
        <AppTextInputWithIcon name="Password"  secureTextEntry={true}  iconName="lock"></AppTextInputWithIcon>
        <AppButton m="7%" title="LOGIN" fontSize={23}></AppButton>
        <View style={{alignItems:"center",width:"100%",height:"33%"}}>
        <Text style={styles.orText}>{strings("or")}</Text>
        <AppRegisterButton onPress={navigation.push("Register")} ></AppRegisterButton>
        </View>
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
      paddingVertical:"9%"
    },
   Formcontainner:{
     width:"100%",
   },
   background:{
   alignItems:"center",
   paddingVertical:"7%",
   },
  
   orText:{
       fontSize:27,
       fontFamily:"Myriad-Roman-Regular",
       color:color.iconColor,
       marginTop:"7%"
   },
   hintRegisterView:{
      alignItems:"center",
      width:"100%",
      marginVertical:"1%"
   },
   hintRegisterText:{
       color:color.secodery,
       fontFamily:"MuktaMahee-Medium",
       fontSize:20,
       textAlign:"center",
       width:"72%"
   },
 
})

export default LoginScreen;