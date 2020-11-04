import React , {useState}from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field'
  import color from '../config/colors';

function AppConfirmationCode() {
    const CELL_COUNT = 4;
     const [value, setValue] = useState('');
     const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
 
    return (
            <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
              )}
              />
    );
}
const styles = StyleSheet.create({
  codeFieldRoot: {
      width:"100%",
      marginTop: "2%",
      justifyContent:"space-evenly",
      paddingVertical:"1%",
    },
  cell: {
    width: "18%",
    height:50,
    lineHeight: 38,
    fontSize: 24,
    borderRadius: 12,
    borderColor:color.white,
    textAlign: 'center',
    backgroundColor:color.white,
    paddingVertical:"1.5%"
  },
  focusCell: {
    borderColor: color.white,
  },
})
export default AppConfirmationCode;