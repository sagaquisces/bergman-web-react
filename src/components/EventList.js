import React from 'react'
import { connect } from 'react-redux'
import EventListItem from './EventListItem'
import EventRow from './EventRow'
import selectExpenses from '../selectors/events'

const EventList = (props) => {

  const createGroupedArray = (arr, chunkSize) => {
    let groups = [], i
    for (i=0; i<arr.length; i+=chunkSize) {
      groups.push(arr.slice(i, i + chunkSize))
    }
    return groups
  }

  const groupedArr = createGroupedArray(props.events, 3)

  return (
    <div>
      {groupedArr.map((chunk) => 
        <EventRow>
          {chunk.map((event) => {
            return <EventListItem key={event.id} {...event}/>
          })}
        </EventRow>
      )}

      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    events: selectExpenses(state.events, state.filters)
    
  }
}

export default connect(mapStateToProps)(EventList)
