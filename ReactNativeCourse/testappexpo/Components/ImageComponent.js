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

// source: Define a origem da imagem (ex.: {uri: 'https://...'}, require('./image.jpg') ou objeto com width/height).
// style: Estilos da imagem, como width, height, borderRadius, etc. (ex.: {width: 100, height: 100}).
// resizeMode: Modo de redimensionamento ('cover', 'contain', 'stretch', 'repeat', 'center') (padrão: 'cover').
// onLoad: Callback chamado quando a imagem carrega com sucesso, recebe {nativeEvent: {width, height}}.
// onLoadStart: Callback chamado quando o carregamento da imagem começa.
// onLoadEnd: Callback chamado quando o carregamento termina (sucesso ou falha).
// onError: Callback chamado em caso de erro no carregamento, recebe {nativeEvent: {error}}.
// onProgress: (Web) Callback chamado durante o carregamento, recebe {nativeEvent: {loaded, total}}.
// blurRadius: Aplica desfoque à imagem (valor numérico, ex.: 5).
// fadeDuration: (Android) Duração da transição de fade ao carregar (em ms, padrão: 300).
// defaultSource: Imagem padrão exibida enquanto a principal carrega (ex.: require('./placeholder.jpg')).
// accessibilityLabel: Texto para leitores de tela, melhora acessibilidade (ex.: "Imagem de perfil").
// testID: Identificador para testes automatizados.
// capInsets: (iOS) Define margens para esticar a imagem (ex.: {top: 10, right: 10, bottom: 10, left: 10}).
// resizeMethod: (Android) Método de redimensionamento ('auto', 'resize', 'scale') (padrão: 'auto').
// loadingIndicatorSource: (iOS) Imagem para o indicador de carregamento (ex.: require('./spinner.jpg')).
// progressiveRenderingEnabled: (Android) Ativa renderização progressiva para JPEGs (padrão: false).
// tintColor: Aplica uma cor de matiz à imagem (ex.: '#00f').
// onLayout: Callback chamado quando o layout da imagem é calculado, recebe {nativeEvent: {layout}}.
// onPartialLoad: (iOS) Callback chamado quando a imagem carrega parcialmente (raro).