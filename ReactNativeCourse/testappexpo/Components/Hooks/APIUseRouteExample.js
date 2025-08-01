//Documentação oficial do React Navigation: https://reactnavigation.org/docs/use-route

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';

const Stack = createStackNavigator();

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Inicial</Text>
        <Button
          title="Ir para Detalhes"
          onPress={() => this.props.navigation.navigate('Details', { id: 123 })}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    const { id } = this.props.route.params || {}; // Acessa params via this.props.route
    return (
      <View style={styles.container}>
        <Text>Nome da Rota: {this.props.route.name}</Text>
        <Text>Parâmetro ID: {id || 'Nenhum'}</Text>
        <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

// route.name: Nome da rota atual (ex.: 'Home').
// route.params: Parâmetros passados para a rota (ex.: { id: 123 }).
// route.key: Identificador único da rota (ex.: 'Home-uuid').
// route.path: Caminho da rota para deep linking, se configurado (ex.: '/home').
// route.state: (Opcional) Estado de navegação para navegadores aninhados.