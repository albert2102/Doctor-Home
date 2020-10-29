import React from 'react';
import { Text, TouchableOpacity ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import color from '../config/colors'
class TabStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            press:false
        };
      }
    componentDidMount() {
        this.setState({press:false})
    }
  
    componentWillUnmount() {
    }
    
    render() {
        console.log(this.props);
      return (
          
          <TouchableOpacity onPress={()=>{this.state.press = true; console.log(this.state.press)}} 
          style={[styles.genral,this.state.press ? styles.buttonPress : styles.button]}
          >
              <Icon name={this.props.children} size={22} color={this.props.color}/>
              <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
      );
    }
  }
const styles = StyleSheet.create({
    genral:{
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:"5%"
    },
    buttonPress:{
        borderBottomColor:color.iconColor,
        borderBottomWidth:10,
        backgroundColor:"red"
    },
    button:{
        backgroundColor:"black"

    },
    text:{
       marginTop:"3%",
       fontSize:12,
    }
})

export default TabStyle;