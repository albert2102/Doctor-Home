import React from 'react';
import { TextInput,StyleSheet, View } from 'react-native';
import color from '../config/colors'
function AppTextInput({name,keyboardType,secureTextEntry,maxLength=25,m="2%"}) {
    return (
     <View style={[styles.container,{marginBottom:m}]}>
     <TextInput clearButtonMode="always" maxLength={maxLength} secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholder={name} style={styles.input}>
     </TextInput>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"80%",
        borderRadius:10,
        backgroundColor:color.white,
        paddingLeft:"4%"
    },
    input:{
        backgroundColor:color.white,
        borderRadius:10,
    }
})
export default AppTextInput;