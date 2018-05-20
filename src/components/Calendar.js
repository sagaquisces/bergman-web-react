import React from 'react'
import EventList from './EventList'
import EventListFilters from './EventListFilters'
import AddEvent from './AddEvent'

const Calendar = (props) => 
  <div>
    <h1>Calendar</h1>
    <EventListFilters />
    <EventList />
    <AddEvent />
  </div>


export default Calendar



