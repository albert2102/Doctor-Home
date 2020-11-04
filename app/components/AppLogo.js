import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

function AppLogo({fontFamily,style}) {
    return (
        <View style={[styles.Textcontainner,style]}> 
        <Text style={styles.Text}>HOME</Text>
          <Text style={styles.Text}>DOCTOR</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Textcontainner:{
        alignItems:'center',
       },
       Text:{
         fontSize:57,
         fontFamily:"BebasNeue-Regular",
         color:color.secodery,
         letterSpacing: 2
       },
})
export default AppLogo;