// Importa React
import React from 'react'

// Define componente funcional
function EventHandlingExample() {
    // Define função para manipular clique
    const ClickHandler = () => {
        // Adiciona texto ao body (não recomendado em React)
        return document.body.innerHTML += `Button has been pressed`
    }
    // Retorna o JSX
    return (
        // Div como contêiner
            // Botão que chama ClickHandler ao ser clicado
        // Fecha a div
        <div>
            <button onClick={ClickHandler}>Click Here</button>
        </div>
    )
}

// Exporta EventHandlingExample como default
export default EventHandlingExample

// Nota: ao usar função em evento, passe o nome (ClickHandler), não ClickHandler()