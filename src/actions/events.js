import uuidv4 from 'uuid/v4'

// ADD_EVENT
export const addEvent = (
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
export const removeEvent = ({ id } = {}) => ({
  type: 'REMOVE_EVENT',
  id
})

// EDIT_EVENT
export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
})