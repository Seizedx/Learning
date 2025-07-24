import { StatusBar, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#841584"
        hidden={false}
        animated={true}
        translucent={false}
      />
      <Text>Conteúdo da tela</Text>
    </View>
  );
};


// animated: Booleano que ativa (true) ou desativa (false) animações para mudanças de estilo (padrão: false).
// backgroundColor: Define a cor de fundo da barra de status (Android, ex.: '#000').
// barStyle: Define o estilo do conteúdo ('default', 'light-content', 'dark-content') (padrão: 'default').
// hidden: Booleano que oculta (true) ou exibe (false) a barra de status (padrão: false).
// translucent: (Android) Booleano que torna a barra de status translúcida, permitindo conteúdo abaixo dela (padrão: false).
// networkActivityIndicatorVisible: (iOS) Mostra indicador de atividade de rede (padrão: false).
// showHideTransition: (iOS) Define a animação ao mostrar/esconder ('fade', 'slide', 'none') (padrão: 'fade').
// testID: Identificador para testes automatizados.


// METODOS ESTÁTICOS

// StatusBar.setHidden(hidden, [animation]): Oculta ou exibe a barra com animação opcional ('fade', 'slide').
// StatusBar.setBarStyle(style, [animated]): Define o estilo ('default', 'light-content', 'dark-content').
// StatusBar.setBackgroundColor(color, [animated]): (Android) Define a cor de fundo.
// StatusBar.setTranslucent(translucent): (Android) Define se a barra é translúcida.
// StatusBar.setNetworkActivityIndicatorVisible(visible): (iOS) Mostra/esconde o indicador de rede.