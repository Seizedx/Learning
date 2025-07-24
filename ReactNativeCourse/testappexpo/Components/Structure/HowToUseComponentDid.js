import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyComponent extends Component {
  state = { count: 0 };

  componentDidMount() {
    // Inicialização, ex.: carregar dados
    console.log('Componente montado');
  }

  componentDidUpdate(prevProps, prevState) {
    // Reage a mudanças de props ou state
    if (prevState.count !== this.state.count) {
      console.log('Contador atualizado:', this.state.count);
    }
  }

  componentWillUnmount() {
    // Limpeza, ex.: remover listeners
    console.log('Componente será desmontado');
  }

  render() {
    return (
      <View>
        <Text>Contador: {this.state.count}</Text>
        <Text onPress={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar
        </Text>
      </View>
    );
  }
}

// componentDidMount(): Chamado após o componente ser montado (inserido no DOM), ideal para inicializações (ex.: chamadas API).
// componentDidUpdate(prevProps, prevState, snapshot): Chamado após atualizações de props ou state, recebe props/state anteriores e snapshot (se usado).
// componentWillUnmount(): Chamado antes do componente ser desmontado, ideal para limpezas (ex.: remover listeners, cancelar timers).