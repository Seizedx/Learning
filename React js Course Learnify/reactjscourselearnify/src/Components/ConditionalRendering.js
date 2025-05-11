// Importa render do testing-library e React, Component
import { render } from '@testing-library/react'
import React, { Component } from 'react'

            // Define a classe que herda de Component
class ConditionalRendering extends Component {
    // Construtor da classe
    constructor(props) {
        // Chama o construtor da classe pai com props
        super(props)
        // Inicializa o estado com isLogged
        this.state = {
            isLogged: true
        }
    }

            // // Render com if-else (jeito 1, comentado)
    // render() { 
    //     // Verifica se isLogged é true
    //     if(this.state.isLogged === true) {
    //         // Retorna mensagem para usuário logado
    //         return (
    //         <div>Welcome Dude</div>
    //         )
    //     // Caso isLogged seja false
    //     } else {
    //         // Retorna mensagem para visitante
    //         return (
    //         <div>Welcome Guest</div>
    //         )
    //     }
    // }

            // // Render com operador ternário (jeito 2, comentado)
    // render() { 
    //     // Usa ternário para renderizar condicionalmente
    //     return this.state.isLogged 
    //     // Se true, renderiza mensagem de logado
    //     ? <div>Welcome User, You are Logged In</div>
    //     // Se false, renderiza mensagem de não logado
    //     : <div>Welcome User, Please Log In</div>
    // }

            // Render com variável e if-else (jeito 3, melhor)
    render () { 
        // Declara variável para armazenar mensagem
        let message
        // Verifica se isLogged é true
        if (this.state.isLogged === true) {
            // Atribui mensagem para usuário logado
            message = <div>Welcome User, You are Logged In</div>
        // Caso isLogged seja false
        } else {
            // Atribui mensagem para usuário não logado
            message = <div>Welcome User, Please Log In</div>
        }
        // Retorna a mensagem dentro de uma div
        return (<div>{message}</div>)
    }

        // render () { // Short Circuit Method, funciona só com true
        //     return this.state.isLogged 
        //     && <div>Welcome User, You are Logged In</div>
        // }


}

// Exporta ConditionalRendering como default
export default ConditionalRendering