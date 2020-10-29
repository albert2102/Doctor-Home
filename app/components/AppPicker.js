import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import color from '../config/colors'
import RNPickerSelect from 'react-native-picker-select';

function AppPicker({ name, m = "5%" ,items}) {
    console.log(name);
    return (
        <View style={[styles.container, { marginBottom: m }]}>
            <RNPickerSelect
                placeholder={{label:name,value:null}}
                onValueChange={(value) => console.log(value)}
                items={items}
                style={{
                    placeholder:{color:"#ADADAD"}
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "80%",
        borderRadius: 10,
        backgroundColor: color.white,
        paddingLeft: "3%"
    },
    input: {
        backgroundColor: color.white,
        borderRadius: 10,
    }
})
export default AppPicker;