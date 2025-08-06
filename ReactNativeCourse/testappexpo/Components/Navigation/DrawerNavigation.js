//https://reactnavigation.org/docs/drawer-based-navigation/
//https://docs.expo.dev/router/advanced/drawer/
//npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Routes from './src/pages/Routes/Routes';
 import 'react-native-gesture-handler';

export default function App() {
        return (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        )
    }

//Componentes:

// Drawer.Navigator: Componente que define a navegação de menu lateral (ex.: <Drawer.Navigator />).
// Drawer.Screen: Define uma tela com nome e componente (ex.: <Drawer.Screen name="Home" component={HomeScreen} />).

//Props do <Drawer.Navigator>:

// initialRouteName: Nome da tela inicial (ex.: 'Home').
// screenOptions: Opções padrão para todas as telas (ex.: { drawerActiveTintColor: '#841584' }).
// drawerContent: Componente personalizado para o conteúdo do drawer (ex.: ({ navigation }) => <CustomDrawerContent />).
// drawerType: Tipo de drawer ('front', 'back', 'slide', 'permanent') (padrão: 'front' em mobile).
// drawerPosition: Posição do drawer ('left', 'right') (padrão: 'left').
// drawerStyle: Estilos do contêiner do drawer (ex.: { width: 250, backgroundColor: '#fff' }).
// backBehavior: Comportamento do botão voltar ('history', 'initialRoute', 'order', 'none') (padrão: 'history').
// detachInactiveScreens: Desmonta telas inativas para otimizar memória (padrão: true).
// id: Identificador único para o navegador (usado em navegação aninhada).
// sceneContainerStyle: Estilos aplicados ao contêiner de cada tela (ex.: { backgroundColor: '#fff' }).
// overlayColor: Cor do fundo ao abrir o drawer (ex.: 'rgba(0,0,0,0.5)').

// Props do <Drawer.Screen>:

// name: Nome único da tela (ex.: 'Home').
// component: Componente associado à tela (ex.: HomeScreen).
// options: Opções específicas da tela (ex.: { drawerLabel: 'Início', drawerIcon: ({ color, size }) => <Icon name="home" /> }).
// initialParams: Parâmetros iniciais passados para a tela (ex.: { id: 1 }).
// getId: Função para gerar um ID único para a tela (ex.: ({ params }) => params.userId).
// listeners: Ouvintes para eventos de navegação (ex.: { drawerItemPress: () => console.log('Item pressionado') }).

//Opções Comuns (via screenOptions ou options):

// drawerLabel: Texto do item no drawer (string ou função que retorna um componente).
// drawerIcon: Ícone do item no drawer (ex.: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />).
// drawerActiveTintColor: Cor do item ativo no drawer (ex.: '#841584').
// drawerInactiveTintColor: Cor dos itens inativos no drawer (ex.: '#ccc').
// drawerActiveBackgroundColor: Cor de fundo do item ativo (ex.: '#e6e6e6').
// drawerInactiveBackgroundColor: Cor de fundo dos itens inativos (ex.: 'transparent').
// drawerLabelStyle: Estilos do texto do item no drawer (ex.: { fontSize: 16 }).
// drawerItemStyle: Estilos do contêiner do item no drawer (ex.: { padding: 10 }).
// headerShown: Mostra/esconde o header da tela (padrão: true).
// headerStyle: Estilos do header (ex.: { backgroundColor: '#841584' }).
// headerTintColor: Cor do texto e ícones do header (ex.: '#fff').

// Métodos de Navegação (via this.props.navigation em classes):

// navigate(routeName, params): Navega para uma tela específica.
// jumpTo(routeName, params): Navega diretamente para uma tela no drawer.
// toggleDrawer(): Abre ou fecha o drawer.
// openDrawer(): Abre o drawer.
// closeDrawer(): Fecha o drawer.
// setParams(params): Atualiza os parâmetros da tela atual.
// dispatch(action): Dispara ações como DrawerActions.toggleDrawer().

// Ações Específicas (usadas com dispatch):

// DrawerActions.toggleDrawer(): Alterna entre abrir e fechar o drawer.
// DrawerActions.openDrawer(): Abre o drawer.
// DrawerActions.closeDrawer(): Fecha o drawer.
// DrawerActions.jumpTo(routeName, params): Navega diretamente para uma tela.

