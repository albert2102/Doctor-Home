import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity,StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import color from '../config/colors'
function AppRegisterButton() {
   const navigation =  useNavigation();
    return (
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.push("Register")}}>
           <View>
           <Text style={styles.buttonTitle}>Register Now</Text>
               </View> 
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        width:"55%",
        borderRadius:19,
        backgroundColor:color.white,
        borderWidth:1,
        borderColor:color.iconColor,
        alignItems:"center",
        paddingVertical:"2%",
        position:'absolute',
        bottom:0
   },
    buttonTitle:{
        fontFamily:"Bahij_TheSansArabic-Plain",
        color:color.green,
        fontSize:20
    }
})
export default AppRegisterButton;