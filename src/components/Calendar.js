import React from 'react'
import EventList from './EventList'
import EventListFilters from './EventListFilters'

const Calendar = (props) => 
  <div>
    <h1>Calendar</h1>
    <EventListFilters />
    <EventList />
  </div>


export default Calendar



