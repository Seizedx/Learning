import React, {useState, useEffect, useMemo} from 'react'
import { 
 Text,
 StyleSheet,
 View,
 TouchableOpacity,
 TextInput,
 Dimensions,
 
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

export default function App() {

  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  // = ComponentDidMount
  useEffect(() => {
    async function getStorage() {
      const storedName = await AsyncStorage.getItem('names');
        if(storedName !== null) {
          setName(storedName);
        }
    }
    getStorage();

    // return() => {} //Funciona como um ComponentWillUnmount
    
  }, []); // array vazio indica que sempre será chamado

  // = ComponentDidUpdate
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('names', name)
    }
    saveStorage();
  }, [name]); // indica o que está aguardando para ser chamado

  function changeName() {
    setName(input);
    setInput('');
  }

  //assim renderiza sempre que há alteração
//   const nameLetters = name.length;
//   console.log(nameLetters);

  //assim renderiza somente se condição for atendida

  
  const nameLetters = useMemo(() => {
      name.length;
      console.log('Number of letter has changed');
  }, [name]);

  return(
    <View style={styles.container}>
      <TextInput
      style={styles.textInput} 
      placeholder='Input Name'
      underlineColorAndroid='transparent'
      value={input}
      onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity
      style={styles.button1Area}
      activeOpacity={0.7}
      onPress={changeName}
      >
        <Text style={styles.button1Text}>Change Name</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>{name}</Text>
      <Text style={styles.text1}>It has {nameLetters} letters</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text1: {
    fontSize: 30,
    fontWeight: 500,
    color: '#ff1a1a'
  },
  button1Area: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#f97879',
    borderWidth: 2,
    borderColor : '#fe686d',
    borderRadius: 20,

  },
  button1Text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500,
  },
  textInput: {
    marginTop: 20,
    width: width * 0.8,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center'
  }
});
