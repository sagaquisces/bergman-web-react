import React from 'react'
import { connect } from 'react-redux'
import EventListItem from './EventListItem'
import selectExpenses from '../selectors/events'

const EventList = (props) => (
  <div>
    <h2>Event List</h2>
    {props.events.map((event) => {
      return <EventListItem key={event.id} {...event}/>
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    events: selectExpenses(state.events, state.filters)
    
  }
}

export default connect(mapStateToProps)(EventList)
