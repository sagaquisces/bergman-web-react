import 'react-dates/initialize'
import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment()
console.log(now.format("ddd D MMM YYYY"))

// Fri 27 Nov 2016

export default class EventForm extends React.Component {
  state = {
    title: '',
    date: moment(),
    description: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  }
  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({
      title
    }))
  }
  onDateChange = (date) => {
    if(date) {
      this.setState(() => ({
        date
      }))
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({
      description
    }))
  }
  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if(!this.state.title || !this.state.description) {
      this.setState(() => ({
        error: 'Please provide title of event and description.'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        date: this.state.date.valueOf()
      })
      this.props.closeModal()
    }
  }
  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit} class='w3-container'>
          {this.state.error && <p>{this.state.error}</p>}
          <p>
            <input
              className='w3-input'
              type='text'
              placeholder='Title'
              value={this.state.title}
              onChange={this.onTitleChange}
              autoFocus
            />
          </p>
  {/*
          <p>
            <input
              className='w3-input'
              type='number'
              placeholder='Date'
              value={this.state.date}
              onChange={this.onDateChange}
            />
          </p>
  */}          
          <p>
            <textarea
              className='w3-input'
              placeholder='Description'
              value={this.state.description}
              onChange={this.onDescriptionChange}
            ></textarea>
          </p>
          <p>
            <SingleDatePicker 
              placeholder='Enter event date'
              date={this.state.date}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onCalendarFocusChange}
              numberOfMonths={1}
            />
          </p>

          <p>
            <button>Add Event</button>
          </p>
        </form>
      </div>
    )
  }
}