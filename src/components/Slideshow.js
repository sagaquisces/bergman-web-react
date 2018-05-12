import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Slideshow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
    this.updateSlide = this.updateSlide.bind(this)
    this.interval = setInterval(this.updateSlide, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateSlide() {
    this.setState((prevState, props) => ({
      slideIndex: prevState.slideIndex !== this.props.children.length - 1 ? prevState.slideIndex + 1 : 0
    }))
  }
  render() {
    return (
      <div style={{height:'100%',margin:'0'}}>
        {this.props.children[this.state.slideIndex]}
      </div>
    )
  }
}

export default Slideshow
