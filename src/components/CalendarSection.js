import React from 'react'
import Calendar from './Calendar'

const asSection = (WrappedComponent) => {
  return (props) => (
    <div className='w3-grey'>
      <div className="w3-container w3-content w3-padding-64" style={{maxWidth:'1200px'}} id={props.sectionId}>
        <WrappedComponent {...props} />
      </div>
    </div>
  )
}

const CalendarSection = asSection(Calendar)
export default CalendarSection