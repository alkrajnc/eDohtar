import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Image, ScrollView} from 'react-native';

import onSignOut from '../auth'

const styles = StyleSheet.create({
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
  })

export default function UporabnikScreen() {


    return (
      <View style={{ flex: 1}}>
        <Text>Uporabnik</Text>
        <Button
            backgroundColor="#03A9F4"
            title="SIGN OUT"
            onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }