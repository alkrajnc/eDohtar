import React, {Component, useState} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#39464d'
        },
    button: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 14,
        borderColor: 'lightblue',
        width: '100%',
        marginTop: 20,
    },
    username: {
        borderBottomColor: "blue",
        borderBottomWidth: 2,
        width: "70%",
        margin: 5,
        color: 'white',
    },
    password: {
        borderBottomColor: "blue",
        borderBottomWidth: 2,
        width: "70%",
        margin: 5,
        color: 'white',
    },
    naslov: {
        fontSize: 34,
        top: 50,
        padding: 10,
        width: "80%",
        textAlign: 'center',
        position: 'absolute',
        borderLeftColor: 'lime',
        borderLeftWidth: 10,
        borderRadius: 10,
        backgroundColor: '#526169'
        },
})


export default class Login extends Component {
     constructor(props) {
                super(props);
                this.state = {text: ''};
                this.state = {pass: ''};
        }
    render() {
        return(

                    <View style={styles.wrapper}>

                    <Text style={styles.naslov}>e-Dohtar</Text>
                    <Text style={{color: 'white'}}>Name</Text>
                    <TextInput placeholder="Username..." style={styles.username} onChangeText={(text) => this.setState({text})}/>
                    <Text style={{color: 'white'}}>Password</Text>
                    <TextInput secureTextEntry placeholder="Password..." style={styles.password} onChangeText={(pass) => this.setState({pass})}/>
                    <Button
                        title="Login"
                        onPress={() => navigate('')}
                        style={styles.button}
                    />
                    </View>

                )
    }
}