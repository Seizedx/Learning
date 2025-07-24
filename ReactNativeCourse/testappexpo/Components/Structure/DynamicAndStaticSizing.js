// Importa React e Component do React
import React, { Component } from 'react'
// Importa componentes View e Text do React Native
import { View, Text } from 'react-native'

// Define e exporta a classe DynamicAndStaticSizing que herda de Component
export class DynamicAndStaticSizing extends Component {
    // Método de renderização
    render() {
        // Retorna o JSX
        return (
          // View principal com flex:1 e fundo cinza
          // View com altura 0 e fundo preto (não visível)
                // View com flex:1 e fundo vermelho
                    // Texto repetido 19 vezes
                // Fecha a View vermelha
                // View com flex:1 e fundo verde
                // View com flex:10 e fundo azul
            // Fecha a View principal
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <View style={{ height: 0, backgroundColor: 'black' }}></View>
                <View style={{ flex: 1, backgroundColor: 'red' }}>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                    <Text>This is a text</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>
                <View style={{ flex: 10, backgroundColor: 'blue' }}></View>
            </View>
        )
    }
}

// Exporta DynamicAndStaticSizing como default
export default DynamicAndStaticSizing