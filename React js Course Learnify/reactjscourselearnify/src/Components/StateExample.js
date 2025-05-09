import React, { Component } from 'react' // importa react com Component

// class StateTest extends Component { // class que vai ser importada exemplo 1
//     render() {
//         return <h1>This is an example of Class Component</h1>
//     }
// }


// class StateTest extends Component { // class que vai ser importada exemplo 2 com props
//     render() {
//         return <h1>This is an example of State Component com props {this.props.name}</h1>
//     }
// }

// Define uma classe que herda de Component
class ClassStateTest extends Component { 
    // Construtor da classe
    constructor () {
        // Chama o construtor da classe pai (Component)
        super()
        // Inicializa o estado com uma propriedade message
        this.state = {
            message: "This is an example of Class State Component"
        }
    }
    
    //função changeMessage que muda a escrita quando clicada

changeMessage = () => {
        // Verifica se a mensagem atual é a original
        const newMessage = this.state.message
            // Se for, muda para nova mensagem
            ? " (Button Pressed) This is an example of Class State Component"
            // Se não, volta para a original
            : this.state.message
        // Atualiza o estado com a nova mensagem
        this.setState({ message: newMessage });
    }

    // Método que define o que será renderizado
    render() {
        // Retorna o JSX com o conteúdo
        return (
            // Div como contêiner
            // Button vai mudar mensagem, utilizando a função changeMessage
            <div>


                <h1>{this.state.message}</h1>

                <button onClick ={() => this.changeMessage()}>Press Me</button>



            </div>
        )
    }
}



export default ClassStateTest // export da class

// Métodos de Estado
// .setState(updater,callback): Atualiza estado e dispara rerenderização.

// Métodos do Ciclo de Vida
// componentDidMount(): Executa após componente montar no DOM.
// componentDidUpdate(prevProps,prevState,snapshot): Executa após atualização.
// componentWillUnmount(): Executa antes de desmontar componente.
// shouldComponentUpdate(nextProps,nextState): Controla se componente deve rerenderizar.
// getSnapshotBeforeUpdate(prevProps,prevState): Captura informações antes da atualização.

// Métodos Estáticos do Ciclo de Vida
// getDerivedStateFromProps(props,state): Atualiza estado com base em props.
// getDerivedStateFromError(error): Atualiza estado em resposta a erros (usado em Error Boundaries).

// Outros Métodos
// forceUpdate(callback): Força rerenderização, ignorando shouldComponentUpdate.
// render(): Define a saída JSX do componente.
// super(props): Chama construtor da classe pai, inicializa this e passa props.

// Recursos Relacionados
// this.state: Objeto que armazena estado local do componente.
// this.props: Objeto que contém propriedades passadas ao componente.
// defaultProps: Define props padrão para o componente.
// propTypes: Valida tipos de props (usado com biblioteca prop-types).