import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, TextInput, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function SignedOut() {
    return(
        <View>
            <Text>Login</Text>
            <View>
                <TextInput
                    placeholder='Uporabnisko ime'
                />
            </View>
        </View>
    )
  }