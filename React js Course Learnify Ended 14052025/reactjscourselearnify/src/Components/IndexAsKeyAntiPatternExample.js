import React from 'react'

function NameListExample() { // exemplo 1
    const name = ['Null', 'Jim', 'Tom', 'Jerry', 'Jim']
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

// Mapeia nomes para elementos h2 com índice
    const nameList = name.map((name, index) => <h2 key={index}>{index + 8762 + ": "} {name}</h2>)
    // Retorna JSX
    return (
        // Div com lista de nomes mapeada
        <div>{nameList}</div>
    )
}

// Exporta NameListExample como default
export default NameListExample

