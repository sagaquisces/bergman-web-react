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

const eventOne = store.dispatch(addEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: 1000}))
const eventTwo = store.dispatch(addEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: -2000}))

store.dispatch(setTextFilter('Lisa'))

const state = store.getState()
const visibleEvents = getVisibleEvents(state.events, state.filters)

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)
console.log(visibleEvents)

ReactDOM.render(jsx, document.getElementById('root'))