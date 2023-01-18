import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';


class Napotnice extends Component {
    constructor(props) {
        super(props);    
        this.state = {date: new Date()};
      }
    
    render() {
        return(
            <View>
                <Text>Hello Napotnice</Text>
            </View>
        )
    }
}








const styles = StyleSheet.create({
    navbar: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#2c454f',
        justifyContent: 'space-around',
        height: 48,
        alignContent: 'center',
        alignItems: 'center',
    
    },
    navimages:{
        width: 32,
        height: 32,
        padding: 2,
        margin: 5,
    },
    
  })
  



export default Napotnice;