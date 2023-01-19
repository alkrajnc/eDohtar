import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faClipboardList, faList, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './src/screens/Login';
import { isSignedIn } from "./src/auth";
import Main from './src/index';


export default class App extends React.Component {
    constructor(props) {
                super(props);
                this.state = null;
        }
    render() {
        if (isSignedIn){
            return(
                    <Screen/>
            )
        } else {
            return(
                    <Main/>
                    )
        }

    }
}