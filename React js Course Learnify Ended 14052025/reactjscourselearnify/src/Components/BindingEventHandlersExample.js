// Importa React e Component do React
import React, { Component } from 'react'

// Define e exporta a classe que herda de Component
export class BindingEventHandlersExample extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com mensagem
        this.state = {
            message: "This is a binding event handler test"
        }
        // Binding manual do clickHandler (comentado, opção 3)
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // Define método clickHandler (versão comentada)
    // clickHandler () {
    //     // Atualiza o estado com nova mensagem
    //     this.setState ({
    //         message: 'This is the setState Test'
    //     })
    //     // Exibe o valor de this no console
    //     console.log(this);
    // }

    // Define método clickHandler como arrow function
    clickHandler = () => {
        // Atualiza o estado com nova mensagem
        this.setState({
            message: "this is another way to do the setState"
        })
    }

    // Método que define o que será renderizado
    render() {
        // Retorna o JSX
        return (
            // Div como contêiner
                // Exibe a mensagem do estado
                // Botão com binding explícito (opção 1, comentado)
                // Botão com arrow function (opção 2, comentado)
                // Botão que chama clickHandler diretamente (opção ativa)
            // Fecha a div
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Press Me Biatch</button> */}
                {/* <button onClick={() => this.clickHandler()}>Press Me Biatch</button> */}
                <button onClick={this.clickHandler}>Press Me Biatch</button>
            </div>
        )
    }
}

// Exporta BindingEventHandlersExample como default
export default BindingEventHandlersExample