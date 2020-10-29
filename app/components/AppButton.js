import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import color from '../config/colors'
function AppButton({m="0%",title,fontFamily="Bahij_TheSansArabic-ExtraLight",fontSize=21.5}) {
    return (
     <TouchableOpacity style={[styles.button,{borderRadius:10,marginTop:m}]}>
         <Text style={[styles.text,{fontFamily:fontFamily,fontSize:fontSize}]}>{title}</Text>
     </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:color.button,
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        paddingBottom:"3%",
        paddingTop:"2%"
    },
    text:{
        color:color.black
    }
})
export default AppButton;