import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import { addEvent } from './actions/events'
import { setTextFilter } from './actions/filters'
import getVisibleEvents from './selectors/events'
import './index.css'

const store = configureStore()

const eventOne = store.dispatch(addEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: 1526939359976}))
const eventTwo = store.dispatch(addEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: 1526939767976}))
const eventThree = store.dispatch(addEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: 1526933959976}))
const eventFour = store.dispatch(addEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: 1526399359976}))
const eventFive = store.dispatch(addEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: -1526939359976}))
const eventSix = store.dispatch(addEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: -2000}))
const eventSeven = store.dispatch(addEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: -1526939359976}))
const eventEight = store.dispatch(addEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: -2000}))


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

ReactDOM.render(jsx, document.getElementById('root'))