// npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
// Dependências adicionais: npm install react-native-screens react-native-safe-area-context.

// Documentação oficial do React Navigation: https://reactnavigation.org/docs/getting-started
// Guia de instalação: https://reactnavigation.org/docs/setup
// Diretório de ícones (para headers): https://icons.expo.fyi/ (com @expo/vector-icons)

import React, { useEffect, useState } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../Navigation/src/pages/About'
import HomePage from '../Navigation/src/pages/HomePage';
 
const Stack = createStackNavigator();
 
export default function App() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='HomePage'
                >
                    <Stack.Screen
                        name="HomePage"
                        component={HomePage}
                        options={{
                            title: 'Initial Page',
                            headerStyle: {
                                backgroundColor: '#a5a5a5',
                            },
                            headerTintColor: 'red',
                            headerShown: false,
                        }} 
                        />
                    <Stack.Screen
                        name="About"
                        component={About}
                        options={{
                            title: 'Initial Page',
                            headerStyle: {
                                backgroundColor: '#932424',
                            },
                            headerTintColor: 'red',
                            headerMode: 'screen',
                            headerTitleAlign: 'center',
                        }} 
                        />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
 

//Componentes Principais:

// NavigationContainer: Componente raiz que gerencia o estado de navegação e tema.
// Navigator: Componente que define o tipo de navegação (ex.: Stack.Navigator, BottomTabs.Navigator).
// Screen: Define uma tela com nome e componente (ex.: <Stack.Screen name="Home" component={HomeScreen} />).

//Navegadores Disponíveis:

// Stack.Navigator: Navegador de pilha para transições de tela (ex.: push/pop).
// BottomTabs.Navigator: Navegador de abas inferiores (ex.: tabs visíveis na parte inferior).
// Drawer.Navigator: Navegador de menu lateral (ex.: menu deslizante).
// MaterialTopTabs.Navigator: Navegador de abas superiores (estilo Material Design).
// NativeStack.Navigator: Navegador de pilha otimizado para performance nativa.

// Props do <NavigationContainer>:            ///////////////////////////////////////////////////

// children: Componentes filhos, como navegadores (ex.: Stack.Navigator, BottomTabs.Navigator).
// theme: Define o tema da navegação (ex.: { colors: { primary: '#841584', background: '#fff' } }).
// initialState: Estado inicial da navegação para restauração (ex.: para deep linking ou persistência).
// onStateChange: Callback chamado quando o estado de navegação muda, recebe o estado atual.
// onReady: Callback chamado quando o NavigationContainer está totalmente inicializado.
// linking: Configuração para deep linking (ex.: { prefixes: ['myapp://'], config: { screens: { Home: 'home' } } }).
// fallback: Componente exibido enquanto o conteúdo inicial está carregando (ex.: <ActivityIndicator />).
// documentTitle: Configura o título da página para web (ex.: { enabled: true, formatter: (options, route) => route.name }).
// onUnhandledAction: Callback chamado quando uma ação de navegação não é tratada.
// independent: Booleano que isola o NavigationContainer de outros (padrão: false).
// ref: Referência para acessar métodos do contêiner (ex.: ref.current.getRootState()).

//**Props do <Navigator> (ex.: <Stack.Navigator>) **:        ////////////////////////////////

// initialRouteName: Nome da tela inicial (ex.: 'Home').
// screenOptions: Opções padrão para todas as telas (ex.: { headerShown: false, gestureEnabled: true }).
// headerMode: (Stack apenas) Define o comportamento do header ('float', 'screen', 'none') (padrão: 'float').
// mode: (Stack apenas) Tipo de transição ('card' para padrão, 'modal' para modal iOS) (padrão: 'card').
// keyboardHandlingEnabled: Controla o ajuste automático para teclado (padrão: true).
// detachInactiveScreens: Desmonta telas inativas para otimizar memória (padrão: true para NativeStack).
// id: Identificador único para o navegador (usado em navegação aninhada).

//Props do <Screen>:

// name: Nome único da tela (ex.: 'Home').
// component: Componente associado à tela (ex.: HomeScreen).
// options: Opções específicas da tela (ex.: { title: 'Início', headerStyle: { backgroundColor: '#841584' } }).
// initialParams: Parâmetros iniciais passados para a tela (ex.: { id: 1 }).

//Métodos de Navegação (acessados via this.props.navigation em classes):

// navigate(routeName, params): Navega para uma tela específica com parâmetros opcionais.
// push(routeName, params): Adiciona uma tela à pilha (mesmo se já estiver na pilha).
// replace(routeName, params): Substitui a tela atual por outra.
// goBack(): Volta para a tela anterior na pilha.
// pop(n): Volta n telas na pilha.
// popToTop(): Volta para a primeira tela da pilha.
// setParams(params): Atualiza os parâmetros da tela atual.
// dispatch(action): Dispara uma ação de navegação personalizada (ex.: StackActions.pop()).

//Ações de Navegação (usadas com dispatch):

// StackActions.push(routeName, params): Adiciona uma tela à pilha.
// StackActions.pop(count): Remove n telas da pilha.
// StackActions.popToTop(): Remove todas as telas até a primeira.
// StackActions.replace(routeName, params): Substitui a tela atual.
// CommonActions.navigate(routeName, params): Navega para uma tela.
// CommonActions.goBack(): Volta para a tela anterior.
// CommonActions.reset(state): Reseta o estado de navegação.