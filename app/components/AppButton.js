import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import color from '../config/colors'
import {strings,isRTL} from '../utiles/language'

function AppButton({m="0%",onPress,pb="3%",pt="2%",title,fontFamily="Bahij_TheSansArabic-ExtraLight",fontSize=21.5}) {
    return (
     <TouchableOpacity onPress={onPress} style={[styles.button,{borderRadius:10,marginTop:m,
        paddingBottom:pb,paddingTop:pt}]}>
         <Text style={[styles.text,{fontFamily:fontFamily,fontSize:fontSize}]}>{strings(title)}</Text>
     </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:color.button,
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        
    },
    text:{
        color:color.black
    }
})
export default AppButton;