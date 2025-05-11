// Importa React e Component do React
import React, { Component } from 'react'

// Define a classe que herda de Component (exemplo 1, comentada)
// class ClassExample extends Component { 
//     // Método de renderização
//         // Retorna um h1 com texto
//     render() {
//         return <h1>This is an example of Class Component</h1>
//     }
// }

// Define a classe que herda de Component (exemplo 2, com props)
class ClassTest extends Component { 
    // Método de renderização
    // Retorna um h1 com texto e prop name
    render() {
        return <h1>This is an example of Class Component com props {this.props.name}</h1>
    }
}

// Exporta ClassTest como default
export default ClassTest 