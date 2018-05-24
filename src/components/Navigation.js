import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import Login from './Login'
import constants from '../constants'
const { modalFormContainerStyle } = constants
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

Modal.setAppElement('#root')

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: 'highlight',
      modalIsOpen: false
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleSmallNav = () => {
    const x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
  }

  render() {
    const borderNavStyle = 'w3-bar-item w3-btn w3-topbar w3-bottombar w3-border-black w3-hover-border-red'
    const highlightNavStyle = 'w3-bar-item w3-button w3-padding-large'

    return (
      <div>
        <div class="w3-top">
          <div className="w3-bar w3-black w3-card">
            <a 
              onClick={this.handleSmallNav} 
              className="w3-bar-item w3-btn w3-padding-large w3-hide-medium w3-hide-large w3-right" 
              href="javascript:void(0)" 
              title="Toggle Navigation Menu"
            >
              <i className="fa fa-bars"></i>
            </a>
            <a 
              href="#"
              onClick={() => {
                const x = document.getElementById("navDemo");
                x.className = x.className.replace(" w3-show", "")
              }}
              className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle)}
            >HOME</a>
            <a href="#bio" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>BIO</a>
            <a href="#calendar" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>CALENDAR</a>
            <a href="#contact" className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}>CONTACT</a>
            
            
            {this.props.uid ? 
              <button
                className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}
                onClick={this.props.startLogout}
              >
                LOGOUT
              </button> :
              <div>
                <button
                  className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle) + ' w3-hide-small'}
                  onClick={this.handleOpenModal}
                >
                  LOGIN
                </button>
                <Modal
                  isOpen={this.state.showModal}
                  contentLabel="Sign In"
                  style={modalFormContainerStyle}
                  onRequestClose={this.handleCloseModal}
                >
                  <Login closeModal={this.handleCloseModal}/>
                </Modal>
              </div>
            }
          </div>
        </div>
    
        <div 
          id="navDemo" 
          className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" 
          style={{marginTop:'46px'}}
          
        >
          <a href="#bio" className="w3-bar-item w3-button w3-padding-large"
            onClick={this.handleSmallNav} 
          >BIO</a>
          <a href="#calendar" className="w3-bar-item w3-button w3-padding-large"
            onClick={this.handleSmallNav} 
          >CALENDAR</a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large"
            onClick={this.handleSmallNav} 
          >CONTACT</a>

          {this.props.uid ? 
              <button
                className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle)}
                onClick={() => {this.props.startLogout(); this.handleSmallNav()}}
              >
                LOGOUT
              </button> :
              <div>
                <button
                  className={(this.state.style === 'highlight'?highlightNavStyle:borderNavStyle)}
                  onClick={() => {this.handleOpenModal(); this.handleSmallNav()}}
                >
                  LOGIN
                </button>
                <Modal
                  isOpen={this.state.showModal}
                  contentLabel="Sign In"
                  style={modalFormContainerStyle}
                  onRequestClose={this.handleCloseModal}
                >
                  <Login closeModal={this.handleCloseModal}/>
                </Modal>
              </div>
            }
        </div>
    
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    uid: state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

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