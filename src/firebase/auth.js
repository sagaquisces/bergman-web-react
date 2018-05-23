import { auth } from './firebase'

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>{
  console.log("Email", email)
  console.log("Password", password)
  return auth.signInWithEmailAndPassword(email, password)
}

// Sign out
export const doSignOut = () =>
  auth.signOut()

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email)

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password)

// Authorization State Change
export const onAuthStateChanged = (method) =>
  auth.onAuthStateChanged(method)