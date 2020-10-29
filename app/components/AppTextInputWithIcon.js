import React from 'react';
import { View,StyleSheet,TextInput, ColorPropType} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons"
import color from '../config/colors'

function AppTextInputWithIcon({iconName,name,keyboardType,secureTextEntry,maxLength=25,StyleSheet}) {
    return (
       <View style={[styles.container]}>
           <Icon style={styles.Icon} name={iconName} size={26} color={color.iconColor}></Icon>
           <TextInput clearButtonMode="always" maxLength={maxLength} secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholder={name} style={styles.input}>
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
        marginTop:"7%"
    },
    input:{
        backgroundColor:color.white,
        borderRadius:10,
        
    },
    Icon:{
        marginRight:"2.5%"
    }
})
export default AppTextInputWithIcon;