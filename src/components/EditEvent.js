import React from 'react'

const EditEvent = (props) => {
  console.log(props)
  return (
    <div>
      Editing the event with id of {props.match.params.id}
    </div>
  )
}

export default EditEvent