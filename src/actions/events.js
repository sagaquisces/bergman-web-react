import db from '../firebase/firebase'

// componenet calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// componenet calls action generator
// action generator returns FUNCTION
// component dispatches FUNCTION
// redux store changes

// ADD_EVENT
export const addEvent = (event) => ({
  type: 'ADD_EVENT',
  event
})

export const startAddEvent = (eventData = {}) => {
  return (dispatch) => {
    const {
      title = '', 
      date = 0, 
      description = '', 
      createdAt = 0 
    } = eventData
    const event = {title, date, description, createdAt}
    
    db.ref('events').push(event).then((ref) => {
      dispatch(addEvent({
        id: ref.key,
        ...event
      }))
    })
  }
}

// REMOVE_EVENT
export const removeEvent = ({ id } = {}) => ({
  type: 'REMOVE_EVENT',
  id
})

export const startRemoveEvent = ({ id }) => {
  return (dispatch) => {
    return db.ref(`events/${id}`).remove().then(() => {
      dispatch(removeEvent({ id }))
    })
  }
}

// EDIT_EVENT
export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
})

export const startEditEvent = (id, updates) => {
  return (dispatch) => {
    return db.ref(`events/${id}`).update(updates).then(() => {
      dispatch(editEvent(id, updates))
    })
  }
}

// SET_EVENTS
export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events
})

export const startSetEvents = () => {
  return (dispatch) => {
    return db.ref('events')
      .once('value')
      .then((snapshot) => {
        const events = []
        
        snapshot.forEach((childSnapshot) => {
          events.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })

        dispatch(setEvents(events))
      })
  }
}