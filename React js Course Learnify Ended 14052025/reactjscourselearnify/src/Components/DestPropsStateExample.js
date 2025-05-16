// Importa React
import React from "react"

// Define componente funcional com desestruturação direta (modo 1, comentado)
// const DestPropsStateTest = ({names, username}) => {   
//     // Retorna o JSX
//         // Exibe names e username passados como props
//     // Fecha a div
//     return (<div>
//         <h1>This is an example of {names}: {username}</h1>
//     </div>
//     )
// }

// Define componente funcional com props e desestruturação interna (modo 2)
const DestPropsStateTest = props => {   
    // Desestrutura names e username de props
    const {names, username} = props
    // Retorna o JSX
        // Exibe names e username passados como props
    // Fecha a div 
    return (<div>
        <h1>This is an example of {names}: {username}</h1>
    </div>
    )
}

// Exporta DestPropsStateTest como default
export default DestPropsStateTest 