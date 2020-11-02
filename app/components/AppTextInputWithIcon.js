import React from 'react';
import { View,StyleSheet,TextInput, ColorPropType} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons"
import color from '../config/colors'
import {strings,isRTL} from '../utiles/language'
function AppTextInputWithIcon({iconName,name,keyboardType,secureTextEntry,maxLength=25,m="0%"}) {
    return (
       <View style={[styles.container,{marginBottom:m}]}>
           <Icon style={styles.Icon} name={iconName} size={26} color={color.iconColor}></Icon>
           <TextInput clearButtonMode="always" maxLength={maxLength} 
           secureTextEntry={secureTextEntry} keyboardType={keyboardType} 
           placeholder={strings(name)} style={isRTL?styles.inputRTL:styles.input}>
           </TextInput>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"80%",
        flexDirection:"row",
        borderRadius:10,
        backgroundColor:color.white,
        paddingLeft:"3%",
        alignItems:"center",
    },
    input:{
        backgroundColor:color.white,
        borderRadius:10,
        textAlign:"left"  
    },
    inputRTL:{
        backgroundColor:color.white,
        borderRadius:10,
        textAlign:"right"  
    },
    Icon:{
        marginRight:"2.5%"
    }
})
export default AppTextInputWithIcon;