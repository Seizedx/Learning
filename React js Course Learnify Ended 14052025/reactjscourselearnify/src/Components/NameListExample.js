// Importa React
import React from 'react'
// Importa componente Person
import Person from './PersonForNameListExample'

// Define componente funcional (exemplo 1, comentado)
// function NameListExample() { 
//     // Array de nomes
//     const name = ['Null', 'Tom', 'Jim', 'Jerry']
//     // Retorna JSX
//     return (
//         // Div como contêiner
//             // Exibe cada nome manualmente
//         // Fecha a div
//         <div>
//             <h2>{name[0]}</h2>
//             <h2>{name[1]}</h2>
//             <h2>{name[2]}</h2>
//             <h2>{name[3]}</h2>
//         </div>
//     )
// }

// Define componente funcional (exemplo 2, comentado)
// function NameListExample () { 
//     // Array de nomes
//     const name = ['Null', 'Tom', 'Jim', 'Jerry']
//     // Retorna JSX
//     return (
//         // Div com mapeamento de nomes
//         <div>{
//             // Mapeia nomes para elementos h2
//             name.map(name => <h2>{name}</h2>)
//         // Fecha a expressão
//         }</div>
//     )
// }

// Define componente funcional (exemplo 3, comentado)
// function NameListExample() { 
//     // Array de nomes
//     const name = ['Null', 'Tom', 'Jim', 'Jerry']
//     // Mapeia nomes para elementos h2
//     const nameList = name.map(name => <h2> {name}</h2>)
//     // Retorna JSX
//     return (
//         // Div com lista de nomes mapeada
//         <div>{nameList}</div>
//     )
// }

// Define componente funcional  (exemplo 4, comentado)
// function NameListExample() { 
//     // Array de objetos com informações de pessoas
//     const person = [
//         {
//             id: 1,
//             name: 'Null',
//             age: 20,
//             skill: 'Python'
//         },
//         {
//             id: 2,
//             name: 'Tom',
//             age: 25,
//             skill: 'PHP'
//         },
//         {
//             id: 3,
//             name: 'Jim',
//             age: 78,
//             skill: 'Dying'
//         }
//     ]
//     // Mapeia pessoas para elementos h2
//     const personList = person.map(person => (<h2>Hi, how are you Mr. {person.name}? You are {person.age} old and your best skil is {person.skill}</h2>))
//     // Retorna JSX
//     return (
//         // Div com lista de pessoas mapeada
//         <div>{personList}</div>
//     )
// }

// Define componente funcional (exemplo 5, ativo)
function NameListExample() { 
    // Array de objetos com informações de pessoas
    const person = [
        {
            id: 1,
            name: 'Null',
            age: 20,
            skill: 'Python'
        },
        {
            id: 2,
            name: 'Tom',
            age: 25,
            skill: 'PHP'
        },
        {
            id: 3,
            name: 'Jim',
            age: 78,
            skill: 'Dying'
        }
    ]
    // Mapeia pessoas para componentes Person
    const personList = person.map(person => <Person person={person} />)
    // Retorna JSX
    return (
        // Div com lista de componentes Person
        <div>{personList}</div>
    )
}

// Exporta NameListExample como default
export default NameListExample