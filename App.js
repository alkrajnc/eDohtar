import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faClipboardList, faList, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login'

export default class App extends React.Component {
    render() {
        return(
                <Login/>
        )
    }
}