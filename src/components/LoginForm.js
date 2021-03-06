import React from 'react'
import { auth } from '../firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }
  
  
  onEmailChange = (e) => {
    const email = e.target.value
    this.setState(() => ({
      email
    }))
  }

  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState(() => ({
      password
    }))
  }
  
  onSubmit = (e) => {
    e.preventDefault()

    if(!this.state.email || !this.state.password) {
      this.setState(() => ({
        error: 'Please provide email and password.'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit(
        this.state.email,
        this.state.password
      )
      // this.props.closeModal()
    }
  }
  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit} class='w3-container'>
          {this.state.error && <p>{this.state.error}</p>}
          <p>
            <input
              className='w3-input'
              type='text'
              placeholder='Email'
              value={this.state.email}
              onChange={this.onEmailChange}
              autoFocus
            />
          </p>     
          <p>
            <input
              className='w3-input'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </p> 

          <p>
            <button className='w3-btn w3-green'>Sign In</button>
          </p>
          { this.state.error && <p>{this.state.error.message}</p>}
        </form>
      </div>
    )
  }
}