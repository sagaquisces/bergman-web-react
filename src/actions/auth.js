
import { doSignInWithEmailAndPassword, doSignOut } from '../firebase/auth';

export const startLogin = (email,password) => {
  return () => {
    return doSignInWithEmailAndPassword(email, password)
  }
}

export const startLogout = () => {
  return () => {
    return doSignOut()
  }
}