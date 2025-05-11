// Importa React
import React from "react"

// Define componente funcional
const ReactCELTest = () => { 
    // Define função (forma 1, comentada, usando JSX)
    //     // Retorna div com h1 estilizado
    // return ( 
    //     <div>
    //         <h1 style={{color: 'red'}}>Hello MF</h1>
    //     </div>
    // )

    // Define função (forma 2, comentada, usando createElement com JSX filho)
    // return (
        //     // Cria div com null props e filho
    //     React.createElement('div', null, <h1>Hello MF</h1>) 
    // )

    // Define função (forma 3, comentada, usando createElement com props)
    // return ( 
    //     // Cria div com props className, id e style, e filho
    //     React.createElement('div', { className: 'container', id: 'main', style: { color: 'green' } }, <h1>Hello MF</h1>) 
    // )

    // Define função (forma 4, comentada, usando createElement com filho)
    // return ( 
    //     // Cria div com null props e filho h3 criado via createElement
    //     React.createElement('div', null, (React.createElement('h3', null, 'hello dude'))) 
    // )

    // Retorna elemento (forma 5, ativa, usando createElement com múltiplos filhos)
    return ( 
        // Cria div com props className
        React.createElement(
            'div', 
            { className: 'container' }, 
            // Filho 1: h1 com props className e style
            React.createElement('h1', { className: 'title', style: { color: 'blue' } }, 'Hello MF'), 
            // Filho 2: p com props style
            React.createElement('p', { style: { color: 'red' } }, 'This is a paragraph')
        )
    )
}

// Exporta ReactCELTest como default
export default ReactCELTest