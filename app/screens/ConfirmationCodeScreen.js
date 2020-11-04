import React, { Component } from 'react';
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
import AppConfirmationCode from '../components/AppConfirmationCode';
import { Value } from 'react-native-reanimated';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class ConfirmationCodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
        <>
        <StatusBar hidden={true} />
        <SafeAreaView style={styles.containner}>
         <AppLogo style={{marginTop:"3%"}}></AppLogo>
         <View style={styles.hintConfirmCodeView}>
         <Text style={styles.hintConfirmCodeText}>{strings('hintconfimCode')}</Text>
         </View>
          <View style={styles.Formcontainner}>
          <ImageBackground resizeMode="stretch" style={styles.background} source={require('../assets/images/backGround.png')}> 
          <AppConfirmationCode></AppConfirmationCode>
          <TouchableHighlight style={styles.resend}><Text style={styles.resendText}>{strings("ResendTheCode")}</Text></TouchableHighlight>
          <AppButton m="10%"  title="Active" fontSize={23}></AppButton>
         </ImageBackground>      
         </View>
        </SafeAreaView> 
        </>
    );
  }
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
     },
     background:{
         flex: 0.8,
     alignItems:"center",
     paddingVertical:"4%",

     },
    
     hintConfirmCodeView:{
        alignItems:"center",
        width:"100%",
        marginVertical:"1%",
        marginTop:"3%"
     },
     hintConfirmCodeText:{
         color:color.secodery,
         fontFamily:"MuktaMahee-Medium",
         fontSize:20,
         textAlign:"center",
         width:"85%",
         lineHeight:30
             },
   resend:{
    marginTop:"10%"

   },
   resendText:{
       color:color.iconColor,
       fontFamily:"Myriad-Roman-Regular",
       fontSize:17,
       textDecorationLine:"underline",
}
})
