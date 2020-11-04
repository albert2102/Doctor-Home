import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-datepicker'
import color  from '../config/colors';
export default class AppDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {date:""}

  }

  render() {
    return (
        <View style={styles.container
        }>
            <DatePicker
            style={styles.picker}
              date={this.state.date}
              mode="date"
              placeholder="Birth Date"
              androidMode="spinner"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                placeholderText:{
                    color:"#ADADAD"
                },
                dateIcon: {
                 
                },
                dateInput: {
                    borderRadius:12,
                    borderColor:color.white,
                    alignItems:"flex-start",
                    width:"100%"
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container:{
        width:"80%",
        borderRadius:10,
        backgroundColor:color.white,
        paddingLeft:"4%",
        paddingVertical:"1%",
        marginBottom:"2%",
        flexBasis:"7.5%",

    },
    picker:{
        borderColor:color.white,
    }
  })

