import React from 'react';
import { View,StyleSheet,StatusBar,SafeAreaView, Image } from 'react-native';
import color from '../config/colors';
import Swiper from 'react-native-swiper'
function AppSlider({style}) {
    return (
       <Swiper style={style}  autoplay={true} activeDotColor="#fffffff" dotColor="#fffffff" showsButtons={false}>
        <View style={styles.slide1}>
        <Image resizeMode="stretch" 
         style={styles.background} 
        source={require('../assets/images/Group128.png')}/> 
        </View>
        <View style={styles.slide1}>
        <Image resizeMode="stretch" 
         style={styles.background} 
        source={require('../assets/images/Group155.png')}/> 
        </View>
        <View style={styles.slide1}>
        <Image resizeMode="stretch" 
         style={styles.background} 
        source={require('../assets/images/Group157.png')}/> 
        </View>
        <View style={styles.slide1}>
        <Image resizeMode="stretch" 
         style={styles.background} 
        source={require('../assets/images/Group159.png')}/> 
        </View>
      </Swiper>
    );
}
const styles = StyleSheet.create({
    wrapper:{
        // height:"35%"
      },
      slide1: {
        flex: 1,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      background:{
        flex:1,
        width:"100%",
        marginHorizontal:"0%"
      },
})
export default AppSlider;