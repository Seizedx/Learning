import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default class FlatListExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: '1', name: 'TestName1', age: '69', email: 'testEmail1@testEmail.com'},
                {id: '2', name: 'TestName2', age: '96', email: 'testEmail2@testEmail.com'},
                {id: '3', name: 'TestName3', age: '19', email: 'testEmail3@testEmail.com'},
                {id: '4', name: 'TestName4', age: '91', email: 'testEmail4@testEmail.com'},
                {id: '5', name: 'TestName5', age: '11', email: 'testEmail5@testEmail.com'},
                {id: '6', name: 'TestName6', age: '21', email: 'testEmail6@testEmail.com'},
                {id: '7', name: 'TestName7', age: '31', email: 'testEmail7@testEmail.com'},
            ]
        };
    }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Person data={item} /> }
        />
      </View>
    )
  }
}


class Person extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> {this.props.data.name}</Text>
                <Text style={styles.text}> {this.props.data.age}</Text>
                <Text style={styles.text}> {this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 50,
    }
})


// Props do FlatList
// data: Array de dados para renderizar (ex.: [{id, ...}, ...]).
// renderItem: Função que renderiza cada item (ex.: ({item, index}) => JSX).
// keyExtractor: Função que retorna chave única para cada item (ex.: (item, index) => string).
// ItemSeparatorComponent: Componente renderizado entre itens.
// ListEmptyComponent: Componente mostrado quando data está vazio.
// ListFooterComponent: Componente renderizado no fim da lista.
// ListHeaderComponent: Componente renderizado no topo da lista.
// ListFooterComponentStyle: Estilo do contêiner do rodapé.
// ListHeaderComponentStyle: Estilo do contêiner do cabeçalho.
// columnWrapperStyle: Estilo do contêiner de colunas em modo multi-colunas.
// extraData: Dados extras que forçam rerenderização se mudarem.
// getItemLayout: Função para otimizar layout (ex.: (data, index) => {length, offset, index}).
// horizontal: Habilita rolagem horizontal (padrão: false).
// initialNumToRender: Número de itens renderizados inicialmente (padrão: 10).
// initialScrollIndex: Índice inicial para rolagem (ex.: number).
// inverted: Inverte direção da lista (padrão: false).
// maxToRenderPerBatch: Máximo de itens renderizados por lote (padrão: 10).
// numColumns: Número de colunas para layout de grade (ex.: number).
// onEndReached: Função chamada ao atingir o fim da lista (ex.: () => {}).
// onEndReachedThreshold: Percentual da lista para disparar onEndReached (ex.: 0.5).
// onRefresh: Função chamada ao puxar para atualizar.
// onViewableItemsChanged: Função chamada quando itens visíveis mudam.
// refreshing: Indica se a lista está atualizando (ex.: boolean).
// removeClippedSubviews: Remove itens fora da tela para performance (padrão: true).
// scrollToIndex: Método para rolar até índice específico (ex.: {index, animated}).
// scrollToOffset: Método para rolar até posição específica (ex.: {offset, animated}).
// viewabilityConfig: Configuração para rastrear itens visíveis.
// viewabilityConfigCallbackPairs: Pares de configurações e callbacks para visibilidade.

// Props Herdadas de ScrollView
// alwaysBounceHorizontal: Permite quique horizontal com conteúdo pequeno.
// alwaysBounceVertical: Permite quique vertical com conteúdo pequeno.
// automaticallyAdjustContentInsets: Ajusta margens no iOS (padrão: true).
// automaticallyAdjustKeyboardInsets: Ajusta margens com teclado (iOS).
// bounces: Habilita quique ao fim do conteúdo (padrão: true).
// contentContainerStyle: Estiliza contêiner interno.
// contentInset: Define margens internas (iOS).
// contentOffset: Define posição inicial de rolagem.
// decelerationRate: Velocidade de desaceleração (iOS).
// directionalLockEnabled: Restringe rolagem a um eixo (padrão: false).
// keyboardDismissMode: Comportamento do teclado ao rolar (iOS).
// keyboardShouldPersistTaps: Interação com toques com teclado aberto.
// nestedScrollEnabled: Habilita rolagem aninhada (Android).
// onMomentumScrollBegin: Chama ao iniciar rolagem por momento.
// onMomentumScrollEnd: Chama ao fim de rolagem por momento.
// onScroll: Chama durante rolagem.
// onScrollBeginDrag: Chama ao iniciar arrasto.
// onScrollEndDrag: Chama ao fim de arrasto.
// pagingEnabled: Faz rolagem parar em múltiplos do tamanho.
// refreshControl: Componente para pull-to-refresh.
// scrollEnabled: Habilita/desabilita rolagem (padrão: true).
// scrollEventThrottle: Frequência de eventos de rolagem (iOS).
// scrollIndicatorInsets: Margens dos indicadores de rolagem.
// showsHorizontalScrollIndicator: Mostra indicador horizontal (padrão: true).
// showsVerticalScrollIndicator: Mostra indicador vertical (padrão: true).
// snapToAlignment: Alinhamento ao parar rolagem (ex.: 'center').
// snapToInterval: Intervalos fixos para parar rolagem.
// snapToOffsets: Posições exatas para parar rolagem.