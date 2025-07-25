// npm install axios

import React, { Component, useEffect, useState } from 'react';
import { 
 Text,
 StyleSheet,
 View,
 FlatList,
 ActivityIndicator,
} from 'react-native';
import API from './services/API';
import Movies from './Movies';

export default function APIExample() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    //chama quando componente é aberto
    useEffect(()=>{
        async function loadMovies() {
            const response = await API.get('r-api/?api=filmes');
            // console.log(response.data); //fica sempre dentro do .data
            setMovies(response.data);
            //setinterval somente para teste
            setInterval(() => {
              setLoading(false);
            }, 5000);
        }
        loadMovies();
    },[]);

    if(loading) {
      return (
      <View style={styles.loadingView}>
        <ActivityIndicator
        color='#121212'
        size={'large'}
        style={styles.loading}
        />
      </View>
      )
    } else {  
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={movies}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Movies data={item} />}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    transform: 'scale(5)',
  }
});