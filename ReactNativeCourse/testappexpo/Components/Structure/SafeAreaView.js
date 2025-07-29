import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top', 'bottom']} mode="padding">
          <View>
            <Text>Conteúdo seguro, sem sobreposição</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
});

//SafeAreaView

// style: Estilos aplicados ao container do SafeAreaView (ex.: {flex: 1, backgroundColor: '#fff'}).
// edges: (react-native-safe-area-context) Define quais bordas respeitar ('top', 'right', 'bottom', 'left') (ex.: ['top', 'bottom']).
// mode: (react-native-safe-area-context) Define o modo de aplicação ('padding' ou 'margin') (padrão: 'padding').
// testID: Identificador para testes automatizados.
// accessibilityLabel: Texto para leitores de tela, melhora acessibilidade (ex.: "Conteúdo principal").
// children: Conteúdo renderizado dentro do SafeAreaView (ex.: componentes como View, Text).

//SafeAreaProvider

// children: Componentes filhos que terão acesso ao contexto de áreas seguras (ex.: SafeAreaView, View).
// initialMetrics: Define métricas iniciais de áreas seguras para renderização síncrona (ex.: { frame, insets }).
// initialSafeAreaInsets: (Obsoleto) Define insets iniciais (ex.: { top: 0, right: 0, bottom: 0, left: 0 }).
// style: Estilos aplicados ao container do SafeAreaProvider (ex.: { flex: 1, backgroundColor: '#fff' }).
// testID: Identificador para testes automatizados.