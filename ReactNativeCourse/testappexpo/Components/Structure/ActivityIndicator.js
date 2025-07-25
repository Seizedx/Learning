import { ActivityIndicator, View, Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  state = { isLoading: false };

  toggleLoading = () => {
    this.setState((prevState) => ({ isLoading: !prevState.isLoading }));
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          color="#841584"
          hidesWhenStopped={true}
          style={{ margin: 20 }}
          accessibilityLabel="Carregando conteúdo"
        />
        <Button title="Alternar Carregamento" onPress={this.toggleLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

// animating: Booleano que controla a visibilidade da animação (true para exibir, false para ocultar) (padrão: true).
// color: Define a cor do indicador de carregamento (ex.: '#0000ff').
// size: Define o tamanho do indicador ('small', 'large', ou número em pixels para Android) (padrão: 'small').
// hidesWhenStopped: Booleano que oculta o indicador quando animating é false (padrão: true).
// style: Estilos aplicados ao container do indicador (ex.: {margin: 10}).
// testID: Identificador para testes automatizados.
// accessibilityLabel: Texto para leitores de tela, melhora acessibilidade (ex.: "Indicador de carregamento").