import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import { startSetEvents } from './actions/events'
// import { setTextFilter } from './actions/filters'
import getVisibleEvents from './selectors/events'
import './index.css'

import { auth } from './firebase'

const store = configureStore()

// const eventOne = store.dispatch(startAddEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: 1526939359976}))
// const eventTwo = store.dispatch(startAddEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: 1526939767976}))
// const eventThree = store.dispatch(startAddEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: 1526933959976}))
// const eventFour = store.dispatch(startAddEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: 1526399359976}))
// const eventFive = store.dispatch(startAddEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: -1526939359976}))
// const eventSix = store.dispatch(startAddEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: -2000}))
// const eventSeven = store.dispatch(startAddEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: -1526939359976}))
// const eventEight = store.dispatch(startAddEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: -2000}))


// store.dispatch(setTextFilter('Lisa'))

// setTimeout(() => {
//   store.dispatch(setTextFilter('violin'))
// }, 3000)

const state = store.getState()
const visibleEvents = getVisibleEvents(state.events, state.filters)

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)
console.log(visibleEvents)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startSetEvents()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'))
})

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('log in')
    
  } else {
    console.log('log out')
  }
})
  

// auth.doSignInWithEmailAndPassword("email", "123456")
//   .then(() => alert("signedIn"))
//   .catch((e) => alert("not signed in", e))


