import { createStore, combineReducers } from 'redux'
import uuidv4 from 'uuid/v4'

// ADD_EVENT
const addEvent = (
  { 
    title = '', 
    date = 0, 
    description = '', 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EVENT',
  event: {
    id: uuidv4(),
    title,
    date,
    description,
    createdAt
  }
})

// REMOVE_EVENT
const removeEvent = ({ id } = {}) => ({
  type: 'REMOVE_EVENT',
  id
})

// EDIT_EVENT
const editEvent = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

// Expenses Reducer

const eventsReducerDefault = []

const eventsReducer = (state = eventsReducerDefault, action) => {
  switch (action.type) {
  case 'ADD_EVENT':
    return [
      ...state,
      action.event
    ]
  case 'REMOVE_EVENT':
    return state.filter(({ id }) => id !== action.id)
  case 'EDIT_EXPENSE':
    return state.map((expense) => {
      if (expense.id === action.id ) {
        return {
          ...expense,
          ...action.updates
        }
      } else {
        return expense
      }
    })
  default:
    return state
  }
}

// Filters Reducer

const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    alert(action.text)
    return {
      ...state,
      text: action.text
    }
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    }
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    }
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    }
  default:
    return state
  }
}

// timestamps
// 33400, 10, -203

// 2000, 2001, 

// Get visible expense
const getVisibleEvents = (events, { text, sortBy, startDate, endDate }) => {
  
  return events.filter((event) => {
    const startDateMatch = typeof startDate !== 'number' || event.date >= startDate 
    const endDateMatch = typeof endDate !== 'number' || event.date  <= endDate
    const textMatch = event.description.toLowerCase().includes(text.toLowerCase()) || event.title.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.date < b.date ? -1 : 1
    }
  })
}

// Store creation

const store = createStore(
  combineReducers({
    events: eventsReducer,
    filters: filtersReducer
  })
)

store.subscribe (() => {
  const state = store.getState()
  const visibleEvents = getVisibleEvents(state.events, state.filters)
  console.log(visibleEvents)
})

const eventOne = store.dispatch(addEvent({ description: 'Plays in Rossini and Wagner for one piano only.', title: 'Orchestration Reductions', date: 1000}))
const eventTwo = store.dispatch(addEvent({ description: 'Lisa plays with her friends', title: 'Friends', date: -2000}))

// store.dispatch(removeEvent({ id: eventOne.event.id }))
// store.dispatch(editEvent(eventTwo.event.id, {title: 'New title'}))

store.dispatch(setTextFilter('Lisa'))
// store.dispatch(setTextFilter(''))

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(125))


const demoState = {
  events: [{
    id: 'pjahsdljfadf',
    title: 'Lisa and Friends',
    date: 97634665542,
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    createdAt: 97634665542
  }],
  filters: {
    text: 'friends',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
}

// const events = [{
//   title: 'Lisa and Friends',
//   date: 'Fri 27 Nov 2018',
//   description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542

// }, {
//   title: 'The Piano Trios of Giuseppe Martucci',
//   date: 'Sat 28 Nov 2018',
//   description: 'Praesen tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542
// }, {
//   title: 'Orchestral Reductions',
//   date: 'Fri 13 Dec 2018',
//   description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542
// }, {
//   title: 'Sonatas of Beethoven',
//   date: 'Sat 13 Dec 2018',
//   description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542
// }]