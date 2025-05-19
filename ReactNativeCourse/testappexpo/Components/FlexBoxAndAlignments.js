// Importa React e Component do React
import React, { Component } from 'react'
// Importa componentes View e Text do React Native
import { View, Text } from 'react-native'

// Define a classe FlexBoxAndAlignments que herda de Component
class FlexBoxAndAlignments extends Component {
    // Método de renderização
    render() {
        // Retorna o JSX
        return (
            // View principal com flexbox e fundo cinza
            <View style={{
                flex: 1, // Ocupa todo o espaço disponível
                flexDirection: 'row', // Alinha filhos em linha
                justifyContent: 'center', // Centraliza filhos horizontalmente
                alignItems: 'center', // Centraliza filhos verticalmente
                backgroundColor: 'grey' // Fundo cinza
                // Primeira View filha (quadrado vermelho)
                // Fecha a View vermelha
                // Segunda View filha (quadrado verde)
                // Fecha a View verde
                // Terceira View filha (quadrado azul)
                // Fecha a View azul
                // Quarta View filha (quadrado amarelo)
                // Fecha a View amarela
                // Fecha a View principal
            }}>
                <View style={{
                    height: 30, // Altura de 30 pixels
                    width: 30, // Largura de 30 pixels
                    backgroundColor: 'red' // Fundo vermelho
                }}>
                </View>
                <View style={{
                    height: 50, // Altura de 50 pixels
                    width: 50, // Largura de 50 pixels
                    backgroundColor: 'green' // Fundo verde
                }}>
                </View> 
                <View style={{
                    height: 80, // Altura de 80 pixels
                    width: 80, // Largura de 80 pixels
                    backgroundColor: 'blue' // Fundo azul
                }}>
                </View>
                <View style={{
                    height: 30, // Altura de 30 pixels
                    width: 30, // Largura de 30 pixels
                    backgroundColor: 'yellow' // Fundo amarelo
                }}>
                </View>
            </View>
        )
    }
}

// Exporta FlexBoxAndAlignments como default
export default FlexBoxAndAlignments