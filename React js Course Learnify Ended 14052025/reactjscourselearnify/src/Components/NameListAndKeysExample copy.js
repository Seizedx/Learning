import React from 'react'
import Person from './PersonForNameListExample'

function NameListExample() { // exemplo 1
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

    const personList = person.map(person => <Person key={person.id} person={person} />)

    return (
    <div>{personList}</div>
  );
}

export default NameListExample
