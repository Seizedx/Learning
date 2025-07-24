import React, {useState} from 'react'
import { 
 Text,
 StyleSheet,
 View,
 TouchableOpacity,
 TextInput,
 Dimensions,
 
} from 'react-native'


const {width, height} = Dimensions.get('window');

 // Não precisa de class, nem component

export default function App() {

  // primeiro a variável, segundo a função que controla o estado da variável
  const [name, setName] = useState('Matt');
  const [input, setInput] = useState('');

  //function antes das funções, não tem necessidade de this. ou this.state.
  function changeName() {
    setName(input);
    setInput('');
  }

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
