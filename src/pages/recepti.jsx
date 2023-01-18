import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';

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


export default function ReceptiScreen() {
  
    //let recept = [{"title" : "Zdravilo1","dodatno" : "Vzet vjutro pa vecer"},{"title" : "Zdravilo2","dodatno" : "Vzeti 1 krat dnevno po zjtrki"}];
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
  
    useEffect(() => {
      fetch('http://10.0.2.2:3000/cards')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return (
      <ScrollView>
        <View style={{ flex: 1}}>
          {data.map((card, index) => 
          <View key={index} style={styles.cardRecepti}>
            <Text key={index} style={styles.cardnaslov}>{card.title}</Text>
            <Text key={`${index}var`} style={styles.cardbody}>{card.dodatno}</Text>
          </View>)
          }
        </View>
      </ScrollView>
    );
  }

