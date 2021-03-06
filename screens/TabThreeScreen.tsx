//import * as React from 'react';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [heroes, setHeroes] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://api.opendota.com/api/heroes");
    const json = await res.json();
    setData(json);
    setHeroes(json.slice());
  };

  const filterNames = (hero) => {
    console.log(heroes.length);
    let search = query.toLowerCase().replace(/ /g, "_");
    if (hero.name.startsWith(search, 14)) {
      return formatNames(hero);
    } else {
      heroes.splice(heroes.indexOf(hero), 1);
      return null;
    }
  };

  const formatNames = (hero) => {
    let heroName = hero.name.charAt(14).toUpperCase() + hero.name.slice(15);
    heroName = heroName.replace(/_/g, " ");
    return heroName;
  };

  const updateQuery = (input: string): void => {
    setHeroes(data.slice());
    setQuery(input);
  };  

  const handlePress = (item) => {  
    // See the entire object
    // alert("Pressed: " + JSON.stringify(movie) )
    alert("Item: " + item.id + " " + formatNames(item) )
   // navigation.navigate('Detail', item);
 }
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab Three Navigator</Text>
    //   <Text style={styles.title}>Search Screen</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    <View style={styles.container}>
      <Text style={styles.heading}>Movie Search</Text>
      <SearchBar
        onChangeText={updateQuery}
        value={query}
        placeholder="Type Here..."  
      />
      <FlatList
        data={heroes}
        keyExtractor={(i) => i.id.toString()}
        extraData={query}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => { handlePress(item)} }>
          <Text style={styles.flatList}>{filterNames(item)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom: 45,
      backgroundColor: 'black',
      color: 'white' 
  },
  heading:{
      marginTop: 50,
      marginBottom:10,
      marginLeft: 15,
      fontSize: 25,
      backgroundColor: 'black',
      color: 'white' 
  },
  flatList:{
      paddingLeft: 15, 
      marginTop:15, 
      paddingBottom:15,
      fontSize: 20,
      borderBottomColor: '#26a69a',
      borderBottomWidth:1,
      backgroundColor: 'black',
      color: 'white'  

  }
});
