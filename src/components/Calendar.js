import React from 'react'
import EventList from './EventList'
import EventListFilters from './EventListFilters'
import EventForm from './EventForm'

const Calendar = (props) => 
  <div>
    <h1>Calendar</h1>
    <EventListFilters />
    <EventList />
    <EventForm />
  </div>


export default Calendar



