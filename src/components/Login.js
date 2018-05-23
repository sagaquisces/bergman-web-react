import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { startLogin } from '../actions/auth'

const Login = (props) => (
  <div className="w3-card-4">
    <div class="w3-container w3-red">
      <h2 style={{width:'500px'}}>Sign In</h2>
    </div>
    <LoginForm 
      onSubmit={(email, password) => {
        props.dispatch(startLogin(email, password))
      }}
      closeModal={props.closeModal}
    />
  </div>
)

export default connect()(Login)