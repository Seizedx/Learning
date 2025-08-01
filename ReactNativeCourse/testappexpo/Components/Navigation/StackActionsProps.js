//Documentação oficial do React Navigation: https://reactnavigation.org/docs/stack-actions

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackActions } from '@react-navigation/stack';
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
          onPress={() => this.props.navigation.dispatch(StackActions.push('Details', { id: 123 }))}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    const { id } = this.props.route.params || {};
    return (
      <View style={styles.container}>
        <Text>Detalhes: ID {id}</Text>
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.dispatch(StackActions.pop())}
        />
        <Button
          title="Voltar ao Início"
          onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}
        />
        <Button
          title="Substituir por Home"
          onPress={() => this.props.navigation.dispatch(StackActions.replace('Home'))}
        />
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

// StackActions.push(routeName, params): Adiciona uma nova tela à pilha, mesmo se já existir (ex.: { routeName: 'Details', params: { id: 123 } }).
// StackActions.pop(count): Remove o número especificado de telas da pilha (ex.: count: 1 para voltar uma tela).
// StackActions.popToTop(): Remove todas as telas até a primeira da pilha.
// StackActions.replace(routeName, params): Substitui a tela atual por uma nova (ex.: { routeName: 'Home', params: { reset: true } }).
// StackActions.reset(state): Reseta a pilha para um novo estado (ex.: { index: 0, routes: [{ name: 'Home' }] }).