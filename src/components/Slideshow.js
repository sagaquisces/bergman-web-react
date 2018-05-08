import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Slideshow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{height:'100%',margin:'0'}}>
        {this.props.children[0]}
      </div>
    )
  }
}

export default Slideshow
