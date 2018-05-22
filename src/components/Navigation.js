import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: 'highlight'
    }
  }

  render() {
    const borderNavStyle = 'w3-bar-item w3-btn w3-topbar w3-bottombar w3-border-black w3-hover-border-red'
    const highlightNavStyle = 'w3-bar-item w3-button w3-padding-large'

    return (
      <div>
        <div class="w3-top">
          <div className="w3-bar w3-black w3-card">
            <a className="w3-bar-item w3-btn w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>


            <a href="#" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle)}>HOME</a>
            <a href="#bio" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>BIO</a>
            <a href="#calendar" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>CALENDAR</a>
            <a href="#contact" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>CONTACT</a>
            <a href="#login" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>LOGIN</a>
          </div>
        </div>
    
        <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop:'46px'}}>
          <a href="#bio" className="w3-bar-item w3-btn w3-padding-large">HOME</a>
          <a href="#calendar" className="w3-bar-item w3-btn w3-padding-large">BIO</a>
          <a href="#contact" className="w3-bar-item w3-btn w3-padding-large">CALENDAR</a>
          <a href="#" className="w3-bar-item w3-btn w3-padding-large">CONTACT</a>
        </div>
    
      </div>
    )
  }
}

export default Navigation

/* <div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
    <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
    <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
    <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Merchandise</a>
        <a href="#" class="w3-bar-item w3-button">Extras</a>
        <a href="#" class="w3-bar-item w3-button">Media</a>
      </div>
    </div>
    <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
  </div>
</div> */