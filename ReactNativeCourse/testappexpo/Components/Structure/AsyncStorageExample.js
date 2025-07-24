//npm install @react-native-async-storage/async-storage --save
//https://react-native-async-storage.github.io/async-storage/docs/api

import React, { Component } from 'react'
import { 
 Text,
 StyleSheet,
 View,
 TouchableOpacity,
 TextInput,
 Keyboard,
 Alert

} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class AsyncStorageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
        name: '',
    };
    this.nameCatch = this.nameCatch.bind(this)
    this.nameSave = this.nameSave.bind(this)
}
//Quando o componente é montado na tela
    async componentDidMount() {
        // Alert.alert('Testing componentDidMount', 'This happens because of ComponentDidMount')
        await AsyncStorage.getItem('name').then((value) => {
            this.setState({name: value})
        });
    }

//Toda vez que um state é atualizado fazer algo
    async componentDidUpdate(_, prevState) {
        const name = this.state.name;
        if(prevState !== name) {
            await AsyncStorage.setItem('name', name)
        }
    }

    nameCatch(text) {
    this.setState({ input: text });
    }

    nameSave() {
        if(this.state.input === '') {
            alert("There's Something Wrong");
        } else {
            this.setState({
                name: this.state.input
            });
            alert('Succesfully Saved!');
            Keyboard.dismiss();
        }
    }

  render() {
    const { input,
            name,

        } = this.state; 

    const { input1,
            checkButtonArea,
            checkButtonText,
            textBeforeInput,

    } = styles;
    const{
            nameCatch,
            nameSave
    } = this;

    return (
      <View style={styles.container}>

        <Text style={styles.textBeforeInput}>What's Your Name?</Text>
        <View style={styles.TextInputArea}>
            <TextInput
                style={input1}
                value={input}
                placeholder='Input Your Name Here'
                underlineColorAndroid='transparent'
                onChangeText={nameCatch} 
                // keyboardType="text" //ou Numeric
                // returnKeyType="done" //ou Next
                // onSubmitEditing={() => this.nextInput.current?.focus()} // caso queira ir para Proxima Input automaticamente
            />
            <TouchableOpacity
                style={checkButtonArea}
                activeOpacity={0.7}
                onPress={nameSave}
                onLongPress={() => console.log('Toque longo')}
                disabled={false}
                accessibilityLabel="Botão personalizado"
            >
                <Text style={checkButtonText}>Touch Me</Text>
            </TouchableOpacity>
        </View>
        <Text style={textBeforeInput}>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    textBeforeInput: {
        fontWeight: 500,
        fontSize: 20,
    },
    TextInputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    input1: {    
        width: 240,
        height: 50,
        color: '#000000',
        borderWidth: 0.3,
        opacity: 0.8,
        borderRadius: 10,
        fontSize: 20,
        padding: 10, 
    },
    checkButtonArea: {
        backgroundColor: '#a80000',
        borderWidth: 1,
        borderColor: '#f80000',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        margin: 20,
    },
    checkButtonText: {
        fontSize: 20,
        fontWeight: '700'
    },
});

// setItem(key, value, [callback]): Salva um valor (string) associado a uma chave.
// getItem(key, [callback]): Recupera o valor (string) associado a uma chave.
// removeItem(key, [callback]): Remove a chave e seu valor do armazenamento.
// clear([callback]): Remove todos os dados do armazenamento.
// getAllKeys([callback]): Retorna uma array com todas as chaves armazenadas.
// multiGet(keys, [callback]): Recupera múltiplos valores para uma lista de chaves, retorna [[key1, value1], [key2, value2], ...].
// multiSet(keyValuePairs, [callback]): Salva múltiplos pares chave-valor ([[key1, value1], [key2, value2], ...]).
// multiRemove(keys, [callback]): Remove múltiplas chaves do armazenamento.
// mergeItem(key, value, [callback]): Mescla um valor (JSON stringificado) com o valor existente para a chave.
// multiMerge(keyValuePairs, [callback]): Mescla múltiplos pares chave-valor com valores existentes.
// flushGetRequests(): (Interno) Limpa a fila de solicitações de leitura pendentes.

//Component 

// componentDidMount(): Chamado após o componente ser montado (inserido no DOM), ideal para inicializações (ex.: chamadas API).
// componentDidUpdate(prevProps, prevState, snapshot): Chamado após atualizações de props ou state, recebe props/state anteriores e snapshot (se usado).
// componentWillUnmount(): Chamado antes do componente ser desmontado, ideal para limpezas (ex.: remover listeners, cancelar timers).