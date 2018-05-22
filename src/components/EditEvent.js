import React from 'react'
import { connect } from 'react-redux'
import EventForm from './EventForm'
import { startEditEvent } from '../actions/events'

const EditEvent = (props) => 
  <div className="w3-card-4">
    <div class="w3-container w3-red">
      <h2 style={{width:'500px'}}>Edit an Event</h2>
    </div>
    <EventForm 
      event={props}
      onSubmit={(event) => {
        props.dispatch(startEditEvent(props.id, event))
      }}
      closeModal={props.closeModal}
    />
  </div>

// const mapStateToProps = (state, props) => {
//   console.log("EditEvent", props)
//   return {
//     event: state.events.find((event) => 
//       event.id === props.match.params.id
//     )
//   }
// }

// export default connect(mapStateToProps)(EditEvent)
export default EditEvent