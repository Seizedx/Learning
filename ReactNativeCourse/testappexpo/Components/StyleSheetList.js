// Importa React e Component do React
import React, { Component } from 'react'
// Importa componentes View, Text e StyleSheet do React Native
import { View, Text, StyleSheet } from 'react-native'

// Cria objeto de estilos com StyleSheet
const styles = StyleSheet.create({
    // Estilo para o contêiner View
    container: {
        marginTop: 30 // Margem superior de 30 pixels
    },
    // Estilo para o primeiro texto
    text1: {
        fontSize: 20, // Tamanho da fonte 20
        color: 'red', // Cor do texto vermelha
        fontWeight: '800' // Peso da fonte (muito negrito)
    },
    // Estilo para o segundo texto
    text2: {
        fontSize: 30, // Tamanho da fonte 30
        color: 'green', // Cor do texto verde
        fontWeight: '700' // Peso da fonte (negrito)
    },
    // Estilo para o terceiro texto
    text3: {
        fontSize: 10, // Tamanho da fonte 10
        color: 'blue', // Cor do texto azul
        fontWeight: '600' // Peso da fonte (semi-negrito)
    },
    // Estilo para o quarto texto
    text4: {
        fontSize: 13, // Tamanho da fonte 13
        color: 'rgb(241, 70, 70)', // Cor do texto vermelho claro
        fontWeight: '500' // Peso da fonte (médio)
    },
    // Estilo para centralizar texto
    centerText: {
        textAlign: 'center' // Alinha texto ao centro
    }
})

// Define a classe StyleSheetUsage que herda de Component
class StyleSheetUsage extends Component {
    // Método de renderização
    render() {
        // Retorna o JSX
        return (
            // View com estilo container
            // Texto com estilo text1
            // Texto com estilos text2 e centerText combinados
                // Texto com estilos text3 e centerText combinados
                // Texto com estilos text4 e centerText combinados
            // Fecha a View
            <View style={styles.container}>
                <Text style={styles.text1}>This is Text 1</Text>
                <Text style={[styles.text2, styles.centerText]}>This is Text 2</Text>
                <Text style={[styles.text3, styles.centerText]}>This is Text 3</Text>
                <Text style={[styles.text4, styles.centerText]}>This is Text 4</Text>
            </View>
        )
    }
}

// Exporta StyleSheetUsage como default
export default StyleSheetUsage;