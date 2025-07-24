import { Dimensions, View, Text } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  state = {
    dimensions: Dimensions.get('window'),
  };

  componentDidMount() {
    this.dimensionSubscription = Dimensions.addEventListener('change', ({ window }) => {
      this.setState({ dimensions: window });
    });
  }

  componentWillUnmount() {
    this.dimensionSubscription.remove();
  }

  render() {
    const { dimensions } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Largura: {dimensions.width}px</Text>
        <Text>Altura: {dimensions.height}px</Text>
        <Text>Escala de fonte: {dimensions.fontScale}</Text>
      </View>
    );
  }
}


// Dimensions.get(dim): Retorna as dimensões (objeto com width, height, scale, fontScale) para 'window' ou 'screen'.
// Dimensions.set(dimensions): Define dimensões personalizadas (raro, usado em casos específicos como testes).
// Dimensions.addEventListener(type, handler): Registra um ouvinte para eventos de mudança de dimensão ('change').
// Dimensions.removeEventListener(type, handler): Remove um ouvinte específico de um evento de dimensão.

// Eventos Disponíveis:

// change: Disparado quando as dimensões de 'window' ou 'screen' mudam (ex.: rotação do dispositivo).

// Propriedades do Evento change:

// event.window: Objeto com {width, height, scale, fontScale} para a janela do app.
// event.screen: Objeto com {width, height, scale, fontScale} para a tela do dispositivo.
