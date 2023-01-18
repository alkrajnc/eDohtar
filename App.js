import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function HomeScreen() {
  let cards = [{"title" : "Obvestilo0","dodatno" : "Vec o obvestilu"},{"title" : "Obvestilo1","dodatno" : "Vec o obvestilu1"}, {"title" : "Obvestilo134","dodatno" : "Vec3242fsdff o obvestilu1"}];
  return (
    <View style={{ flex: 1}}>
      {cards.map((card, index) => 
      <View key={index} style={styles.card}>
        <Text key={index} style={styles.cardnaslov}>{card.title}</Text>
        <Text key={`${index}var`} style={styles.cardbody}>{card.dodatno}</Text>
      </View>)
      }
    </View>
  );
}



function NapotniceScreen() {
  let cards = [{"title" : "Obvestilo0","dodatno" : "Vec o obvestilu"},{"title" : "Obvestilo1","dodatno" : "Vec o obvestilu1"}, {"title" : "Obvestilo134","dodatno" : "Vec3242fsdff o obvestilu1"}];
  return (
    <View style={{ flex: 1}}>
      {cards.map((card, index) => 
      <View key={index} style={styles.cardNapotnica}>
        <Text key={index} style={styles.cardnaslov}>{card.title}</Text>
        <Text key={`${index}var`} style={styles.cardbody}>{card.dodatno}</Text>
      </View>)
      }
    </View>
  );
}







function UporabnikScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View>
  );
}

function ReceptiScreen() {
  
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
  
  console.log(JSON.stringify(data));
  let recept = [];
  console.log("Recept: " + JSON.stringify(data));
   
  return (
    <View style={{ flex: 1}}>
      <Text>Shel</Text>
      {recept.map((card, index) => 
      <View key={index} style={styles.cardRecepti}>
        <Text key={index} style={styles.cardnaslov}>{card.title}</Text>
        <Text key={`${index}var`} style={styles.cardbody}>dodatno</Text>
      </View>)
      }
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'faHouse';
              } else if (route.name === 'Settings') {
                iconName = 'faUser';
              }
  
              // You can return any component that you like here!
              return <FontAwesomeIcon icon={faUser}/>;
            },
            tabBarActiveTintColor: 'lime',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Domov" component={HomeScreen} />
          <Tab.Screen name="Napotnice" component={NapotniceScreen} />
          <Tab.Screen name="Recepti" component={ReceptiScreen} />
          <Tab.Screen name="Uporabnik" component={UporabnikScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#2c363b',
      justifyContent: 'space-between',
  },
  container: {
      flex: 0,
      backgroundColor: '#2c363b',
  },
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
  button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10,
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


export default App;



