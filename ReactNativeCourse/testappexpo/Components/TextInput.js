// Importa React e Component do React
import React, { Component } from 'react'
// Importa componentes Text, StyleSheet, View e TextInput do React Native
import { Text, StyleSheet, View, TextInput } from 'react-native'

// Define a classe TextInputTest que herda de Component
class TextInputTest extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com name vazio
        this.state = {
            name: ''
        }
        // Vincula o método nameCatch ao this
        this.nameCatch = this.nameCatch.bind(this)
    }
    
    // Método para capturar texto do TextInput
    nameCatch(text) {
        // Atualiza o estado com o texto recebido
        this.setState({ name: text });
    }

    // Método que define o que será renderizado
    render() {
        // Retorna o JSX
        return (
            // View com estilo container
            // TextInput para entrada de texto
                // Fecha TextInput
                // Texto que exibe saudação com nome do estado
                // Fecha a View
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, styles.textAlign]} // Aplica estilos input e textAlign
                    placeholder='Input something here' // Texto de placeholder
                    underlineColorAndroid='transparent' // Remove sublinhado no Android
                    onChangeText={this.nameCatch} // Chama nameCatch ao mudar texto
                >
                </TextInput>
                <Text style={[styles.text, styles.textAlign]}>Welcome {this.state.name}</Text>
            </View>
        )
    }
}

// Cria objeto de estilos com StyleSheet
const styles = StyleSheet.create({
    // Estilo para o contêiner View
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        marginTop: 40 // Margem superior de 40 pixels
    },
    // Estilo para o TextInput
    input: {
        color: 'black', // Cor do texto
        boxShadow: '0px 0px 5px 0px rgba(129, 7, 7, 0.5)', // Não suportado no React Native
        borderRadius: 10, // Cantos arredondados
        marginLeft: 30, // Margem à esquerda
        marginRight: 30, // Margem à direita
        fontSize: 20, // Tamanho da fonte
        padding: 10, // Espaçamento interno
    },
    // Estilo para o Text
    text: {
        fontSize: 30, // Tamanho da fonte
        color: 'red', // Cor do texto
    },
    // Estilo para centralizar texto
    textAlign: {
        textAlign: 'center' // Alinha texto ao centro
    }
});

// Exporta TextInputTest como default
export default TextInputTest