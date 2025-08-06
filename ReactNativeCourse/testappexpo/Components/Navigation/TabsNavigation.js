//Documentação oficial do Bottom Tabs Navigator: https://reactnavigation.org/docs/bottom-tab-navigator/
// npm install @react-navigation/bottom-tabs

import React
 from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from './src/pages/Resource/About'
import HomePage from './src/pages/Resource/HomePage';
import Contact from './src/pages/Resource/Contact';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
 

const Tab = createBottomTabNavigator(); 

export default function App() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='HomePage' 
                    screenOptions={{
                            headerShown: false,
                            tabBarHideOnKeyboard: true,
                            borderTopWidth: 0,
                            tabBarActiveTintColor: 'red',
                            tabBarInactiveTintColor: 'green',
                    }}
                    
                >
                    <Tab.Screen
                        name="HomePage"
                        component={HomePage}
                        options={{
                            tabBarLabel: 'Início',
                            tabBarIcon: ({color, size}) => {
                                return <MaterialCommunityIcons name='home' color={color} size={size} />
                            },
                            tabBarLabelPosition: 'beside-icon',
                            // tabBarShowLabel: false // funciona em todos,
                            // tabBarIconStyle: {
                            //     marginBottom: 5,
                            // },
                            tabBarLabelStyle: {
                                marginTop: -5,
                            },
                        }}
                        />
                    <Tab.Screen
                        name="About"
                        component={About}
                            options={{
                            tabBarLabel: 'Sobre',
                            tabBarIcon: ({color, size}) => {
                                return <MaterialCommunityIcons name='information' color={color} size={size} />
                            },
                        }}
                        />
                    <Tab.Screen
                        name="Contact"
                        component={Contact}
                        options={{
                            tabBarLabel: 'Contato',
                            tabBarIcon: ({color, size}) => {
                                return <MaterialCommunityIcons name='contacts' color={color} size={size} />
                            },
                            tabBarActiveBackgroundColor: 'yellow',
                            tabBarInactiveBackgroundColor: 'blue', //pega as outras também
                        }}
                        />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

//Componentes


// BottomTabs.Navigator: Componente que define a navegação de abas inferiores (ex.: <BottomTabs.Navigator />).
// BottomTabs.Screen: Define uma tela com nome e componente (ex.: <BottomTabs.Screen name="Home" component={HomeScreen} />).

// Props do <BottomTabs.Navigator>:

// initialRouteName: Nome da aba inicial (ex.: 'Home').
// screenOptions: Opções padrão para todas as telas (ex.: { tabBarActiveTintColor: '#841584' }).
// tabBar: Componente personalizado para a barra de abas (ex.: ({ navigation, state }) => <CustomTabBar />).
// backBehavior: Comportamento do botão voltar ('history', 'initialRoute', 'order', 'none') (padrão: 'history').
// detachInactiveScreens: Desmonta telas inativas para otimizar memória (padrão: true).
// id: Identificador único para o navegador (usado em navegação aninhada).
// sceneContainerStyle: Estilos aplicados ao contêiner de cada tela (ex.: { backgroundColor: '#fff' }).

// Props do <BottomTabs.Screen>:

// name: Nome único da aba (ex.: 'Home').
// component: Componente associado à aba (ex.: HomeScreen).
// options: Opções específicas da aba (ex.: { tabBarLabel: 'Início', tabBarIcon: ({ color, size }) => <Icon name="home" /> }).
// initialParams: Parâmetros iniciais passados para a aba (ex.: { id: 1 }).
// getId: Função para gerar um ID único para a aba (ex.: ({ params }) => params.userId).
// listeners: Ouvintes para eventos de navegação (ex.: { tabPress: () => console.log('Aba pressionada') }).

// Opções Comuns (via screenOptions ou options):

// tabBarStyle: Estilos da barra de abas (ex.: { backgroundColor: '#841584' }).
// tabBarActiveTintColor: Cor dos ícones e textos das abas ativas (ex.: '#841584').
// tabBarInactiveTintColor: Cor dos ícones e textos das abas inativas (ex.: '#ccc').
// tabBarLabel: Texto da aba (string ou função que retorna um componente).
// tabBarIcon: Ícone da aba (ex.: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />).
// tabBarBadge: Texto ou número para um badge na aba (ex.: '3').
// tabBarLabelStyle: Estilos do texto da aba (ex.: { fontSize: 12 }).
// tabBarIconStyle: Estilos do ícone da aba (ex.: { marginTop: 5 }).
// tabBarHideOnKeyboard: Oculta a barra de abas quando o teclado aparece (padrão: false).
// tabBarShowLabel: Mostra/esconde os rótulos das abas (padrão: true).
// headerShown: Mostra/esconde o header da tela (padrão: true).
// headerStyle: Estilos do header (ex.: { backgroundColor: '#841584' }).
// headerTintColor: Cor do texto e ícones do header (ex.: '#fff').

//Métodos de Navegação (via this.props.navigation em classes):

// navigate(routeName, params): Navega para uma aba específica.
// jumpTo(routeName, params): Navega diretamente para uma aba (ignora histórico).
// setParams(params): Atualiza os parâmetros da aba atual.
// dispatch(action): Dispara ações como CommonActions.navigate ou TabActions.jumpTo.

//Ações Específicas (usadas com dispatch):

// TabActions.jumpTo(routeName, params): Navega diretamente para uma aba específica.