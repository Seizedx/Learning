// npm install axios

import React, { Component, useEffect, useState } from 'react';
import { 
 Text,
 StyleSheet,
 View,
 FlatList,
} from 'react-native';
import API from './services/API';
import Movies from './Movies';

export default function APIExample() {
    const [movies, setMovies] = useState([]);

    //chama quando componente é aberto
    useEffect(()=>{
        async function loadMovies() {
            const response = await API.get('r-api/?api=filmes');
            // console.log(response.data); //fica sempre dentro do .data
            setMovies(response.data);
        }
        loadMovies();
    },[]);
    return (
      <View style={styles.container}>
        <Text>Testing HTTP Requisition</Text>
        <View style={styles.flatlistArea}>
          <FlatList
            style={styles.flatlist1}
            data={movies}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Movies data={item} />}
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  flatlistArea: {

  },
  flatlist1: {

  }
});