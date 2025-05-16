// Importa React e Component do React
import React, { Component } from 'react'

// Define a classe que herda de Component
class ClassProject1 extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com name
        this.state = {
            name: 'ClassProject1'
        }
        // Exibe mensagem no console
        console.log('Lifecycle CP1 constructor');
    }

    // Método estático do ciclo de vida
    static getDerivedStateFromProps(props, state) {
        // Exibe mensagem no console
        console.log('Lifecylce CP1 getDerivedStateFromProps')
        // Retorna null (sem alterações no estado)
        return null
    }

    // Método que define o que será renderizado
    render() {
        // Exibe mensagem no console
        console.log('Lifecycle CP1 render');
        // Retorna o JSX
        return (
            // Div como contêiner
            // Texto exibido
            // Fecha a div
            <div>
                This is the lifecycle Class Project1
            </div>
        )
    }
}

// Exporta ClassProject1 como default
export default ClassProject1