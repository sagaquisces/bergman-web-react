import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import PasswordForgotForm from './PasswordForgotForm'
import { startLogin, requestPasswordReset } from '../actions/auth'

const INITIAL_STATE = {
  error: null,
  formMode: 'login'
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...INITIAL_STATE
    }
  }

  render() {
    return (
      <div className="w3-card-4">
        <div class="w3-container w3-red">
          <h2 style={{width:'500px'}}>{this.state.formMode === 'login' && 'Sign In' || this.state.formMode === 'forgot' && 'Forgot Password'}</h2>
        </div>
        {this.state.error && <div className='w3-panel'>{this.state.error}</div>}
        {this.state.formMode === 'login' &&
          <LoginForm 
            onSubmit={(email, password) => {
              this.props.dispatch(startLogin(email, password))
                .then(() => {
          
                })
                .catch(() => {
                  this.setState(() => ({
                    error: 'Your login failed. Try again.'
                  }))
                })
            }}
            closeModal={this.props.closeModal}
          />
        }
        {this.state.formMode === 'forgot' &&
          <PasswordForgotForm 
            onSubmit={(email) => {
              this.props.dispatch(requestPasswordReset(email))
                .then(() => {
                  this.setState(() => ({
                    formMode: 'login',
                    error: 'Check your email inbox instructions on resetting your password'
                  }))
                })
                .catch(() => {
                  this.setState(() => ({
                    error: 'Your request failed. Try again.'
                  }))
                })
            }}
            closeModal={this.props.closeModal}
          />
        }

        <button
          onClick={() => {
            this.setState({
              formMode: 'forgot',
            })
          }}
          class="w3-button w3-block w3-teal"
        >FORGOT PASSWORD</button>
        <button
          onClick={() => {
            this.setState({
              formMode: 'forgot',
            })
          }}
          class="w3-button w3-block w3-teal"
        >CHANGE PASSWORD</button>
      </div>
    )
  }
}

// const Login = (props) => {
//   console.log (props)
//   return (
//     <div className="w3-card-4">
//       <div class="w3-container w3-red">
//         <h2 style={{width:'500px'}}>Sign In</h2>
//       </div>
//       <LoginForm 
//         onSubmit={(email, password) => {
//           props.dispatch(startLogin(email, password))
//             .then(() => {
//               alert ("success", props.uid)
//             })
//             .catch(() => {
//               alert ("failure", props.uid)
//             })
//         }}
//         closeModal={props.closeModal}
//       />
//     </div>
//   )
// }

const mapStateToProps = state => {
  return {
    uid: state.auth.uid
  }
}

export default connect(mapStateToProps)(Login)