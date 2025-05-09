import React from "react"

const ReactCELTest = () => { // Declarando function

//  return ( // forma 1 de declaração, utilizando html
//        <div>
//            <h1 style ={{color: 'red'}}>Hello MF</h1>
//        </div>
// )}


// return (
// React.createElement('div', null, <h1>Hello MF</h1>) // forma 2, utilizando o create element
// )}
// se não quiser props, utilizar o null


// return ( // forma 3
//     React.createElement('div', { className: 'container', id: 'main', style: { color: 'green' } }, <h1>Hello MF</h1>) // forma 3
// )} 
// funcional, caso não queira definir props, pode só escrever null


// return ( // forma 4
// React.createElement('div', null, (React.createElement('h3', null, 'hello dude'))) 
// )}
//funcional, serve para definir filhos


return ( // forma 5
React.createElement(
    'div', // Pai
    { className: 'container' }, // Props do pai
    React.createElement('h1', { className: 'title', style: { color: 'blue' } }, 'Hello MF'), // Filho 1
    React.createElement('p', { style: { color: 'red' } }, 'This is a paragraph')) // Filho 2
)}


  
export default ReactCELTest