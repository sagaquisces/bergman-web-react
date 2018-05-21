import React from 'react'
import { connect } from 'react-redux'
import EventForm from './EventForm'
import { addEvent } from '../actions/events'

const AddEvent = (props) => (
  <div className="w3-card-4">
    <div class="w3-container w3-red">
      <h2>Add an Event</h2>
    </div>
    <EventForm 
      onSubmit={(event) => {
        props.dispatch(addEvent(event))
      }}
    />
  </div>
)

export default connect()(AddEvent)