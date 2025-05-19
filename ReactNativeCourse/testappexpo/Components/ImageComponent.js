// Importa React e Component do React
import React, { Component } from 'react';

// Importa componentes View, Text e Image do React Native
import { View, Text, Image } from 'react-native';

// Define a classe TestImage que herda de Component
class TestImage extends Component {
  // Método de renderização
  render() {
    // Declara variável img com URL da imagem
    let img = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg';
  
    // Retorna o JSX
    return (
      // View como contêiner
      // Componente Image com fonte da URL
      // Texto centralizado exibindo prop nome
      // Fecha a View
      <View>
        <Image
          source={{ uri: img }}
          // Estilo com altura e largura de props, centralização e margem
          style={{
            height: this.props.altura,
            width: this.props.largura,
            alignSelf: 'center',
            margin: 10
          }}
        />
        <Text style={{ textAlign: 'center' }}>{this.props.nome}</Text>
      </View>
    );
  }
}

// Exporta TestImage como default
export default TestImage;