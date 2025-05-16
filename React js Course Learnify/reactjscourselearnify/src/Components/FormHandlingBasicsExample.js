// Importa React e Component do React
import React, { Component } from 'react'

// Define a classe que herda de Component
class FormHandlingTest extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com username, comments e topic
        this.state = {
            username: '',
            comments: '',
            topic: 'React' // Valor padrão para o select
        }
    }

    // Manipula mudanças no campo username
    handleUsernameChange = (event) => {
        // Atualiza o estado com o valor do input
        this.setState({
            username: event.target.value
        })
    }

    // Manipula mudanças no campo comments
    handleCommentsChange = event => {
        // Atualiza o estado com o valor do textarea
        this.setState({
            comments: event.target.value
        })
    }

    // Manipula mudanças no campo topic
    handleTopicChange = (event) => {
        // Atualiza o estado com o valor do select
        this.setState({
            topic: event.target.value
        })
    }

    // Manipula o envio do formulário
    handleSubmit = (event) => {
        // Exibe alerta com valores do estado
        alert(`Username: ${this.state.username}\nComment: ${this.state.comments}\nTopic: ${this.state.topic}`)
    }

    // Método que define o que será renderizado
    render() {
        
        // Comentário sobre desestruturação (não usado)
        // const (username, comments, topic) = this.state 

        // Explica como evitar this.state repetitivo (não implementado)
        // caso não queira usar this.state em todas as calls, 
        // da pra fazer assim, quando for chamar algo
        // irá usar somente o {username} ao invés de {this.state.username}
        // Retorna o JSX
        return (
            // Formulário com evento onSubmit
                // Div para campo username
                    // Label para input de username
                    // Input controlado para username
                // Fecha div
                // Div para campo comments
                    // Label para textarea de comments
                    // Textarea controlado para comments
                // Fecha div
                // Div para campo topic
                    // Label para select de topic
                    // Select controlado para topic
                        // Opção para React
                        // Opção para Angular
                        // Opção para Vue
                    // Fecha select
                // Fecha div
                // Div para botão de submit
                    // Botão para enviar formulário
                    // Fecha div
                    // Fecha formulário
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User ID: </label>
                    <input type="text" placeholder='Input Username' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea value={this.state.comments} placeholder='Input Comment' onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

// Exporta FormHandlingTest como default
export default FormHandlingTest