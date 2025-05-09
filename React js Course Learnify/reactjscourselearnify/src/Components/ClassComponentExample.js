import React, { Component } from 'react' // importa react com Component

// class ClassExample extends Component { // class que vai ser importada exemplo 1
//     render() {
//         return <h1>This is an example of Class Component</h1>
//     }
// }


class ClassTest extends Component { // class que vai ser importada exemplo 2 com props
    render() {
        return <h1>This is an example of Class Component com props {this.props.name}</h1>
    }
}

export default ClassTest // export da class