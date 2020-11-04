import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
function AppServiece(props) {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.serviceContiner}>
            {/* <View style={styles.serviceContiner}> */}
                <Image resizeMode="contain" style={styles.image} source={require('../assets/images/images1.png')}></Image>
                <Text style={styles.title}>Home Vist</Text>
                <Text style={styles.description}>Talk with best doctor</Text>
            {/* </View> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceContiner}>
                <Image resizeMode="contain" style={styles.image} source={require('../assets/images/images1.png')}></Image>
                <Text style={styles.title}>Home Vist</Text>
                <Text style={styles.description}>Talk with best doctor</Text>
            </TouchableOpacity>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    serviceContiner: {
        paddingBottom: "5%",
        paddingTop: "3%",
        borderRadius: 17,
        flex: 0.5, flexGrow: 0.4,
        backgroundColor: color.white,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        flexGrow: 0.4,
        flexBasis: "12%"
    },
    title: {
        marginTop: "1%",
        fontFamily: "Bahij_TheSansArabic-Plain",
        fontSize: 15,
        color: color.serviseTitleColor
    },
    description: {
        marginTop: "1%",
        fontFamily: "Bahij_TheSansArabic-Plain",
        fontSize: 12,
        color: color.serviceDescriptionColor
    }
})
export default AppServiece;