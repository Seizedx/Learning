// Importa React
import React from "react"

// Define componente funcional com props (exemplo comentado)
// const PropsTest = props => {  
//     // Retorna h1 com props names e username
//     return <h1>Welcome, {props.names}, Your Username is: {props.username}</h1> 
// }

// Define componente funcional com props e children
const PropsTest = props => {  
    // Retorna JSX com div
        // Exibe props names e username
        // Renderiza os filhos passados via props.children
    // Fecha a div
    return (<div>
        <h1>This is an example of {props.names}: {props.username}</h1>
        {props.children}
    </div>
    )
}

// Exporta PropsTest como default
export default PropsTest 