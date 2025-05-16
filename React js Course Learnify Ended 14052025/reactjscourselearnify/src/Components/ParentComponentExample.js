// Importa React e Component do React
import React, { Component } from 'react'
// Importa o componente ChildComponent
import ChildComponent from './ChildComponentExample'

// Define a classe que herda de Component
class ParentComponentTest extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com parentName
        this.state = {
            parentName: 'ParentMethodAsProps'
        }
        // Vincula o método greetParent ao this
        this.greetParent = this.greetParent.bind(this)
    }

    // Método para exibir alerta com saudação
    greetParent(childName) {
        // Exibe alerta com parentName e childName
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    // Método que define o que será renderizado
    render() {
        // Retorna o JSX
        return (
            // Div como contêiner
                // Botão que chama greetParent (comentado)
                // Renderiza ChildComponent com greetParent como prop
            // Fecha a div
            <div>
                {/* <button onClick={this.greetParent}>PressParent</button> */}
                <ChildComponent greetChild={this.greetParent} />
            </div>
        )
    }
}

// Exporta ParentComponentTest como default
export default ParentComponentTest