import React from 'react'

export default class EventForm extends React.Component {
  render() {
    return (
      
      <form class='w3-container'>
        <p>
          <input
            className='w3-input'
            type='text'
            placeholder='Title'
            autoFocus
          />
        </p>
        <p>
          <input
            className='w3-input'
            type='number'
            placeholder='Date'
          />
        </p>
        <p>
          <textarea
            className='w3-input'
            placeholder='Description'
          ></textarea>
        </p>
      </form>
      
    )
  }
}