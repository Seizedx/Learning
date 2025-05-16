import React, { Component } from 'react'

class ClassProject2 extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.inputRef)
    }
    
  render() {
    return (
      <div>

        <input type='text' />      

      </div>
    )
  }
}

export default ClassProject2