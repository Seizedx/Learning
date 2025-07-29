import { View, Button, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';

class App extends Component {
  state = { data: '' };

  handleStorage = async () => {
    try {
      await AsyncStorage.setItem('key', 'valor');
      const value = await AsyncStorage.getItem('key');
      if (value === null) {
        throw new Error('Chave não encontrada');
      }
      this.setState({ data: value });
      Alert.alert('Sucesso', 'Dado recuperado: ' + value);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao acessar AsyncStorage: ' + error.message);
    } finally {
      console.log('Operação concluída');
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Testar AsyncStorage" onPress={this.handleStorage} />
        <Text>Dado: {this.state.data}</Text>
      </View>
    );
  }
}

// try/catch é usado para lidar com erros em operações assíncronas (ex.: chamadas API, AsyncStorage) ou síncronas (ex.: manipulação de dados).
// Em React Native, é comum usar try/catch com async/await para operações como fetch, AsyncStorage ou métodos nativos.
// O catch captura qualquer erro lançado no bloco try, incluindo erros de rede, JSON inválido, etc.
// O finally é útil para limpezas ou ações que devem ocorrer sempre (ex.: ocultar um indicador de carregamento).
// Use throw para criar erros personalizados quando necessário.