// Importa React e Component do React
import React, { Component } from 'react';

// Importa componentes View, Text e Button do React Native
import { View, Text, Button } from 'react-native';

// Define a classe ConstructorState que herda de Component
class ConstructorState extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com nome vazio
        this.state = {
            nome: ''
        };
        // Vincula o método entrar ao this
        this.entrar = this.entrar.bind(this);
    }

    // Define método entrar (modo 1)
    entrar() {
        // Atualiza o estado com nome fixo
        this.setState({
            nome: 'TestNameChanged'
        })
    }

    // Define método entrar com parâmetro (modo 2)
    entrar(nome) {
        // Atualiza o estado com nome passado como argumento
        this.setState({
            nome: nome
        })
    }

    // Método que define o que será renderizado
    render() {
        // Retorna o JSX
        return (
            // View com margem superior
                // Botão comentado que chamaria entrar (modo 1)
                // Botão ativo que chama entrar com argumento (modo 2)
                // Texto centralizado com nome do estado
                // Fecha a View
            <View style={{ marginTop: 40 }}>
                {/* <Button title="Press Me" onPress={this.entrar} color='red' /> */}
                <Button
                    title="Press Me"
                    onPress={() => this.entrar('TestNameChanged2')}
                    color='red'
                />
                <Text style={{ textAlign: 'center', fontSize: 23, color: 'red' }}>
                    {this.state.nome}
                </Text>
            </View>
        )
    }
}

// Exporta ConstructorState como default
export default ConstructorState