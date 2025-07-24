import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ScrollViewTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
        showsHorizontalScrollIndicator={false} //props, olhar abaixo
        >
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    box1: {
        backgroundColor: 'red',
        height: 250
    },
    box2: {
        backgroundColor: 'blue',
        height: 250
    },
    box3: {
        backgroundColor: 'green',
        height: 250
    },
    box4: {
        backgroundColor: 'yellow',
        height: 250  },
})

// Props do ScrollView props={valor}
// alwaysBounceHorizontal: Permite quique horizontal com conteúdo pequeno (padrão: true se horizontal).
// alwaysBounceVertical: Permite quique vertical com conteúdo pequeno (padrão: true se !horizontal).
// automaticallyAdjustContentInsets: Ajusta margens no iOS com base na barra de navegação (padrão: true).
// automaticallyAdjustKeyboardInsets: Ajusta margens com base no teclado (padrão: false, iOS).
// automaticallyAdjustsScrollIndicatorInsets: Ajusta margens do indicador de rolagem (padrão: true, iOS).
// bounces: Habilita efeito de quique ao fim do conteúdo (padrão: true).
// bouncesZoom: Permite ultrapassar limites de zoom com animação (padrão: true).
// canCancelContentTouches: Cancela toques se detectado como rolagem (padrão: true).
// centerContent: Centraliza conteúdo menor que ScrollView (padrão: false).
// contentContainerStyle: Estiliza contêiner interno do conteúdo.
// contentInset: Define margens internas do conteúdo (iOS).
// contentInsetAdjustmentBehavior: Controla ajuste de margens com safe areas (iOS).
// contentOffset: Define posição inicial de rolagem (padrão: {x: 0, y: 0}).
// decelerationRate: Define velocidade de desaceleração (padrão: 'normal', iOS).
// directionalLockEnabled: Restringe rolagem a um eixo (padrão: false).
// disableIntervalMomentum: Para rolagem ao soltar, sem momento (padrão: false).
// disableScrollViewPanResponder: Desativa PanResponder padrão (padrão: false).
// endFillColor: Preenche espaço vazio com cor (Android).
// fadingEdgeLength: Define comprimento de desvanecimento nas bordas (Android).
// horizontal: Habilita rolagem horizontal (padrão: false).                     /////////////////////
// indicatorStyle: Estilo do indicador de rolagem (ex.: 'white', iOS).
// invertStickyHeaders: Inverte comportamento de cabeçalhos fixos (padrão: false).
// keyboardDismissMode: Define comportamento do teclado ao rolar (padrão: 'none', iOS).
// keyboardShouldPersistTaps: Controla toques com teclado aberto (padrão: 'never').
// maintainVisibleContentPosition: Mantém conteúdo visível ao mudar (iOS).
// maximumZoomScale: Define zoom máximo (padrão: 1.0).
// minimumZoomScale: Define zoom mínimo (padrão: 1.0).
// nestedScrollEnabled: Habilita rolagem aninhada (padrão: false, Android).
// onContentSizeChange: Chama função quando tamanho do conteúdo muda.
// onMomentumScrollBegin: Chama função ao iniciar rolagem por momento.
// onMomentumScrollEnd: Chama função ao fim de rolagem por momento.
// onScroll: Chama função durante rolagem.
// onScrollBeginDrag: Chama função ao iniciar arrasto.
// onScrollEndDrag: Chama função ao fim de arrasto.
// onScrollToTop: Chama função ao rolar ao topo (iOS).
// overScrollMode: Define rolagem além do conteúdo (Android).
// pagingEnabled: Faz rolagem parar em múltiplos do tamanho (padrão: false).
// pinchGestureEnabled: Habilita gestos de pinça para zoom (padrão: true, iOS).
// refreshControl: Adiciona funcionalidade de pull-to-refresh.
// removeClippedSubviews: Remove visualizações fora da tela (padrão: true).
// scrollEnabled: Habilita/desabilita rolagem (padrão: true).
// scrollEventThrottle: Controla frequência de eventos de rolagem (iOS).
// scrollIndicatorInsets: Define margens dos indicadores de rolagem.
// scrollPerfTag: Tag para monitoramento de performance (customizado).
// scrollsToTop: Rola ao topo ao tocar barra de status (padrão: true, iOS).
// scrollToOverflowEnabled: Permite rolar além do conteúdo (padrão: false, iOS).
// showsHorizontalScrollIndicator: Mostra indicador horizontal (padrão: true).
// showsVerticalScrollIndicator: Mostra indicador vertical (padrão: true).
// snapToAlignment: Define alinhamento ao parar rolagem (ex.: 'center').
// snapToEnd: Habilita ajuste ao fim do conteúdo (padrão: true).
// snapToInterval: Define intervalos fixos para parar rolagem.
// snapToOffsets: Define posições exatas para parar rolagem.
// snapToStart: Habilita ajuste ao início do conteúdo (padrão: true).
// StickyHeaderComponent: Componente para cabeçalhos fixos.
// stickyHeaderIndices: Define índices de filhos fixos no topo.
// zoomScale: Define escala inicial de zoom (padrão: 1.0).