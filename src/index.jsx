import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faClipboardList, faList, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ReceptiScreen from './src/pages/recepti';
import NapotniceScreen from './src/pages/napotnice';
import HomeScreen from './src/pages/obvestila';
import UporabnikScreen from './src/pages/uporabnik';


const Tab = createBottomTabNavigator();

function SignedIn() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Domov') {
                return (
                  <FontAwesomeIcon
                    icon={faHouse}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Uporabnik') {
                return (
                  <FontAwesomeIcon
                    icon={faUser}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Napotnice') {
                return (
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    size={size}
                    color={color}
                  />
                );
              } /*else if (route.name === 'Recepti') {
                return (
                  <FontAwesomeIcon
                    icon={faReceipt}
                    size={size}
                    color={color}
                  />
                );
              }
              <Tab.Screen name="Recepti" options={{ tabBarBadge: 1 }} component={ReceptiScreen} />
              */
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#3ebd60',
          })}
        >
          <Tab.Screen name="Domov" component={HomeScreen} />
          <Tab.Screen name="Napotnice" component={NapotniceScreen} />
          <Tab.Screen name="Uporabnik" component={UporabnikScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  naslov: {
      color: 'white',
      margin: 0,
      padding: 10,
      paddingTop: 20,
      textAlign: 'center',
      fontSize: 40,
      fontFamily: 'monospace',
      backgroundColor: '#3c4b52',
  },
  card: {
      backgroundColor: '#3cb55c',
      height: 196,
      marginBottom: 10,
      margin: 14,
      borderColor: '#3cb55c',
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
  },
  cardNapotnica: {
    backgroundColor: '#2770ab',
    height: 148,
    marginBottom: 10,
    margin: 14,
    borderColor: '#2770ab',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,

  },
  cardRecepti: {
    backgroundColor: '#37424f',
    height: 256,
    marginBottom: 10,
    margin: 14,
    borderColor: '#37424f',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,

  },
  cardbody: {
      color: 'white',
      margin: 24,

  },
  cardnaslov: {
      color: '#ffffff',
      fontSize: 24,
      fontFamily: 'monospace',
      fontStyle: 'bold'
  },
  cardContainer: {
      flex: 0,
      margin: 5,
  },
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
      width: 128,
      height: 128,
      padding: 10,
      color: 'white',
  },
  
})


export default SignedIn;



