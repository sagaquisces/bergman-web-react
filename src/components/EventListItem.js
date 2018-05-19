// Export a stateless functional component
// description, title, date
import React from 'react'
import { connect } from 'react-redux'
import { removeEvent } from '../actions/events'

const EventListItem = ({ dispatch, id, title, description, date }) => (
  <div>
    <small>{date}</small>
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={() => {
      dispatch(removeEvent( {id} ))
    }}>Remove</button>
  </div>
)

export default connect()(EventListItem)