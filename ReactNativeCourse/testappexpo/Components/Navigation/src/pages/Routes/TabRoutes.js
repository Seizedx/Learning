//Documentação oficial do Bottom Tabs Navigator: https://reactnavigation.org/docs/bottom-tab-navigator/
// npm install @react-navigation/bottom-tabs

import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../ResourceClean/Home';
import About from '../ResourceClean/About';
import Contact from '../ResourceClean/Contact';
import Details from '../ResourceClean/Details';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
 

const Tab = createBottomTabNavigator(); 

export default function Routes() {
        return (
                <Tab.Navigator
                    screenOptions={{
                            headerShown: false,
                            tabBarHideOnKeyboard: true,
                            borderTopWidth: 0,
                            tabBarActiveTintColor: 'red',
                            tabBarInactiveTintColor: '#ffffff',
                            tabBarBackground: () => (
                                <View style={{ flex: 1, backgroundColor: '#8a8a8aff' }} /> // ou image, qualquer coisa
                                ),
                            // tabBarShowLabel: false // funciona em todos,
                            // tabBarIconStyle: {
                            //     marginBottom: 5,
                            // },
                            tabBarLabelStyle: {
                                marginTop: -5,
                            },
                            // tabBarActiveBackgroundColor: 'yellow',
                            // tabBarInactiveBackgroundColor: 'blue', 
                            // tabBarLabelPosition: 'beside-icon',
                        }}
                    
                >
                    <Tab.Screen
                        name="Home"
                        component={HomePage}
                        options={{
                            tabBarLabel: 'Início',
                            tabBarIcon: ({color, size}) => {
                                return <MaterialCommunityIcons name='home' color={color} size={size} />
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
                                return <MaterialCommunityIcons name='phone' color={color} size={size} />
                            },
                        }}
                        />
                    <Tab.Screen
                        name="Details"
                        component={Details}
                        options={{
                            tabBarLabel: 'Detalhes',
                            tabBarIcon: ({color, size}) => {
                                return <MaterialCommunityIcons name='phone' color={color} size={size} />
                            },
                        }}
                        />
                </Tab.Navigator>
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