// Importa React e Component do React
import React, { Component } from 'react'

// Define componente funcional ChildComponent
function ChildComponent (props) {
    // Retorna o JSX
    return (
        // Div como contêiner
            // Botão que chama greetChild (comentado)
            // Botão que chama greetChild com argumento 'child'
        // Fecha a div
        <div>
            {/* <button onClick={props.greetChild}>PressChild</button> */}
            <button onClick={() => props.greetChild('child')}>PressChild</button>
        </div>
    )
}

// Exporta ChildComponent como default
export default ChildComponent