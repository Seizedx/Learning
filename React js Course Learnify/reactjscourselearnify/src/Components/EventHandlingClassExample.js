// Importa React e Component do React
import React, { Component } from 'react'

// // Tenta selecionar elemento com classe .App (comentado)
// const App = document.querySelector(".App")

// // Define a classe que herda de Component (versão comentada)
// class EventHandlingClassExample extends Component { // Class
//   // Método de renderização
//   render() {
//     // Retorna o JSX
//     return (
//       // Div como contêiner
//       <div> 
//         // Botão que tenta chamar onClickTest
//         <button onClick={onClickTest}>Press here</button>
//       // Fecha a div
//       </div>
//     )
//   }
// }
// Tenta manipular o DOM diretamente (comentado)
// App.innerHTML += "This sucks"

// Define função onClickTest fora da classe (comentada)
// const onClickTest = () => { return (App.innerHTML += `The Button has been Clicked`)}

// Define a classe que herda de Component
class EventHandlingClassExample extends Component { // Função
  // Método para lidar com o clique
  onClickTest () { 
    // Registra mensagem no console
    return (console.log("Button is clicked"))
  }

  // Método que define o que será renderizado
  render() {
    // Retorna o JSX
    return (
      // Div como contêiner
      // Botão que chama onClickTest
      // Fecha a div
      <div> 
        <button onClick={this.onClickTest}>Press here</button>
      </div>
    )
  }
}

// Exporta a classe como default
export default EventHandlingClassExample