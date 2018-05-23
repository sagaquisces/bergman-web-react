
import { 
  doSignInWithEmailAndPassword, 
  doSignOut,
  doPasswordReset,
} from '../firebase/auth'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startLogin = (email,password) => {
  return () => {
    return doSignInWithEmailAndPassword(email, password)
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return doSignOut()
  }
}

export const requestPasswordReset = (email) => {
  return () => {
    return doPasswordReset(email)
  }
}