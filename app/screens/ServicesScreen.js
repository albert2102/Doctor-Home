import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { strings, isRTL } from '../utiles/language'
import color from '../config/colors';
import AppServiece from '../components/AppServiece';

import React from 'react';

function ServicesScreen(props) {
    return (
        <>
            <StatusBar hidden={true} />
            <SafeAreaView style={styles.containner}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{strings("ServicesTitle")} </Text>
                </View>
                <View style={styles.serviceContainer}>
                    <AppServiece></AppServiece>
                    <AppServiece></AppServiece>
                    <AppServiece></AppServiece>
                </View>
            </SafeAreaView>
        </>
    );
}

export default ServicesScreen;

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        backgroundColor: color.primary,
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        color: color.HomeTextColor,
        fontFamily: "BebasNeue-Regular",
        fontSize: 28,
        textAlign: "center",
    },
    textContainer: {
        backgroundColor: color.third,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        flex: 0.1,
        width: "100%"
    },
    serviceContainer: {
        flex: 0.8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "3%"
    },
}
)

