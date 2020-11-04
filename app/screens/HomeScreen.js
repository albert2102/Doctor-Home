import React, { Component } from 'react';
import { Text, StyleSheet, StatusBar, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import AppServiece from '../components/AppServiece';
import AppSlider from '../components/AppSlider';
import color from '../config/colors';
import { strings, isRTL } from '../utiles/language'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import ServicesScreen from './ServicesScreen';
function HomeScreen({navigation}) {
  return (
    <>
        <StatusBar hidden={true} />
        <SafeAreaView style={styles.containner}>
          <View style={styles.sliderContainer}>
            <AppSlider style={styles.wrapper}></AppSlider>
          </View>
          <Text style={styles.text}>Home Doctor</Text>
          <View style={styles.serviceContainer}>
            <AppServiece></AppServiece>
            <AppServiece></AppServiece>
          </View>
         <TouchableOpacity style={styles.button} onPress={()=>{
           navigation.push('Services')
         }}>
           <Text style={styles.buttonTitle}>All Services</Text>
           <Icon style={{position:"absolute",left:"72.5%"}} name="right" size={25} color={color.green}/>
           <Icon name="right" size={25} color={color.secodery}/>
         </TouchableOpacity>
        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: color.primary,
    flexDirection: "column",
    alignItems: "center",
  },
  sliderContainer: {
    flex: 0.4
  },
  text: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 27,
    color: color.HomeTextColor,
    marginVertical: "4%"
  },
  serviceContainer: {
    flex: 0.55,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  button:{
    width:"60%",
    borderRadius:19,
    backgroundColor:color.white,
    borderWidth:1,
    borderColor:color.iconColor,
    alignItems:"center",
    paddingVertical:"2%",
    marginTop:"5%",
    flexDirection:"row",
    paddingHorizontal:"3%",
    justifyContent:"center"
},
buttonTitle:{
    fontFamily:"Bahij_TheSansArabic-Plain",
    color:color.green,
    fontSize:20,
    paddingHorizontal:"3%"

}
})
export default HomeScreen;
