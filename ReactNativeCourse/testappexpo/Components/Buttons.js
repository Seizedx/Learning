// Importa React e Component do React
import React, { Component } from 'react'
// Importa componentes Text, View, StyleSheet, TextInput e Button do React Native
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

// Define e exporta a classe Buttons que herda de Component
export class Buttons extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com name e input vazios
        this.state = {
            name: '',
            input: ''
        }
        // Vincula o método enter ao this
        this.enter = this.enter.bind(this)
    }
    
    // Método para manipular o clique do botão
    enter() {
        // Verifica se o input está vazio
        if (this.state.input === '') {
            // Exibe alerta se input estiver vazio
            alert('Write your name mf')
            // Encerra a execução
            return
        }
        // Atualiza o estado com saudação e valor do input
        this.setState({ name: 'Welcome ' + this.state.input })
    }

    // Método que define o que será renderizado
    render() {
        // Retorna o JSX
        return (
            // View com estilo container
                // TextInput para entrada de texto
                // Fecha TextInput
                // Botão com título Entrar
                // Texto que exibe o estado name
                // Fecha a View
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, styles.textAlign]} // Aplica estilos input e textAlign
                    placeholder='Input something here' // Texto de placeholder
                    underlineColorAndroid='transparent' // Remove sublinhado no Android
                    onChangeText={(text) => this.setState({ input: text })} // Atualiza input no estado
                >
                </TextInput>
                <Button
                    title='Entrar' // Texto do botão
                    onPress={this.enter} // Chama enter ao clicar
                />
                <Text style={[styles.text, styles.textAlign]}>{this.state.name}</Text>
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
        marginBottom: 20 // Margem inferior
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

// Exporta Buttons como default
export default Buttons

// title: Texto exibido no botão (ex.: "Clique aqui").
// onPress: Callback chamado quando o botão é pressionado.
// color: Cor de fundo do botão (ex.: "#841584").
// disabled: Booleano que desabilita (true) ou habilita (false) o botão (padrão: false).
// accessibilityLabel: Texto para leitores de tela, melhora acessibilidade (ex.: "Botão de enviar").
// testID: Identificador para testes automatizados.