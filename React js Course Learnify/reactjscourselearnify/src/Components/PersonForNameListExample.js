import React from 'react'
import NameListExample from './NameListExample'

function Person({person}) {

  return (
    <div>
        <h2>Hi, how are you Mr/Ms. {person.name}? You are {person.age} old and your best skill is {person.skill}</h2>
    </div>
  )
}

export default Person