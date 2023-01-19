import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';

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
    cardtime: {
        color: 'gray',
        margin: 10,
    },
  })




export default function NapotniceScreen() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('http://109.182.70.39:3000/napotnice')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        }, []);


    return (
      <ScrollView>
        <View style={{ flex: 1}}>
          {data.map((element, index) =>
          <View key={index} style={styles.cardNapotnica}>
            <Text key={index} style={styles.cardnaslov}>{element.ime_napotnice}</Text>
            <Text key={`${index}var`} style={styles.cardbody}>{element.podrobno_napotnia}</Text>
              <Text style={styles.cardtime}>{element.cas_napotnica}</Text>
          </View>)
          }
        </View>
      </ScrollView>
    );
  }