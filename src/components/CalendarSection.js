import React from 'react'
import Calendar from './Calendar'

const asSection = (WrappedComponent) => {
  return (props) => (
    <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id={props.sectionId}>
      <WrappedComponent {...props} />
    </div>
  )
}

const CalendarSection = asSection(Calendar)
export default CalendarSection