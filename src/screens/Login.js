import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "../index";
import {onSignIn} from "../auth";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'white'
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
        color: 'black',
    },
    password: {
        borderBottomColor: "blue",
        borderBottomWidth: 2,
        width: "70%",
        margin: 5,
        color: 'black',
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

export default function Screen() {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Home" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>

            );
}

function authUser(username, userpass) {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://109.182.70.39:3000/users', {
            method: 'POST',
            mode: 'CORS',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                user: username,
                pass: userpass,
            }
        })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        }, []);
}


class Login extends Component {
     constructor(props) {
                super(props);
                this.state = {text: ''};
                this.state = {pass: ''};
                this.state = {
                    data: [],
                    isLoading: true,
                };
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
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={styles.button}
                    />
                    </View>

                )
    }
}