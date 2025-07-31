//expo 
// Documentação oficial do Expo: https://docs.expo.dev/guides/icons/
// Diretório de ícones: https://icons.expo.fyi/
// Repositório GitHub: https://github.com/expo/vector-icons
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { Component } from 'react';

export default class VectorIcons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons
          name="checkmark-circle-outline"
          size={30}
          color="#841584"
          style={{ margin: 10 }}
          accessibilityLabel="Ícone de confirmação"
        />
        <FontAwesome.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => console.log('Login pressionado')}
        >
          Login com Facebook
        </FontAwesome.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

// AntDesign: Ícones do AntDesign.
// Entypo: Ícones do Entypo.
// EvilIcons: Ícones do EvilIcons.
// Feather: Ícones do Feather.
// FontAwesome: Ícones do FontAwesome 5 (versão gratuita).
// FontAwesome6: Ícones do FontAwesome 6 (versão gratuita, alguns Pro com licença).
// Foundation: Ícones do Foundation.
// Ionicons: Ícones do Ionicons.
// MaterialIcons: Ícones do MaterialIcons.
// MaterialCommunityIcons: Ícones do MaterialCommunityIcons.
// Octicons: Ícones do Octicons (GitHub).
// SimpleLineIcons: Ícones do SimpleLineIcons.












//cli

//Documentação oficial: https://github.com/oblador/react-native-vector-icons
//https://oblador.github.io/react-native-vector-icons/


// import { View, StyleSheet } from 'react-native';
// // import Icon from '@react-native-vector-icons/material-icons'; //cli
// import React, { Component } from 'react';



// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Icon
//           name="home"
//           size={30}
//           color="#841584"
//           style={{ margin: 10 }}
//           onPress={() => console.log('Ícone pressionado')}
//           accessibilityLabel="Ícone de casa"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });


//Componentes e Uso:

// Icon: Componente principal para renderizar ícones (ex.: <Icon name="home" size={30} color="#900" />).

//Props do Componente <Icon>:

// name: Nome do ícone do conjunto de ícones (ex.: 'home' para MaterialIcons).
// size: Tamanho do ícone em pixels (ex.: 30).
// color: Cor do ícone (ex.: '#900', 'rgb(255,0,0)').
// style: Estilos adicionais aplicados ao ícone (ex.: {margin: 10}).
// onPress: Callback chamado quando o ícone é pressionado (requer Touchable).
// testID: Identificador para testes automatizados.
// accessibilityLabel: Texto para leitores de tela (ex.: "Ícone de casa").

//Métodos Estáticos do <Icon>:

// @react-native-vector-icons/ant-design: Ícones do AntDesign.
// @react-native-vector-icons/evil-icons: Ícones do EvilIcons.
// @react-native-vector-icons/feather: Ícones do Feather.
// @react-native-vector-icons/fontawesome6: Ícones do FontAwesome 6 (free/pro).
// @react-native-vector-icons/foundation: Ícones do Foundation.
// @react-native-vector-icons/ionicons: Ícones do Ionicons.
// @react-native-vector-icons/material-icons: Ícones do MaterialIcons.
// @react-native-vector-icons/material-community: Ícones do MaterialCommunityIcons.
// @react-native-vector-icons/octicons: Ícones do Octicons (GitHub).
// @react-native-vector-icons/simple-line-icons: Ícones do SimpleLineIcons.

//Métodos de Controle de Carregamento Dinâmico:

// isDynamicLoadingEnabled(): Retorna se o carregamento dinâmico está ativado.
// isDynamicLoadingSupported(): Verifica se o carregamento dinâmico é suportado pelo runtime.
// setDynamicLoadingEnabled(enabled): Ativa ou desativa o carregamento dinâmico.
// setDynamicLoadingErrorCallback(callback): Define um callback para erros de carregamento dinâmico.