import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import constants from '../constants'
const { modalFormContainerStyle } = constants
import EventList from './EventList'
import EventListFilters from './EventListFilters'
import AddEvent from './AddEvent'

Modal.setAppElement('#root')

class Calendar extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <h2 className='w3-wide w3-center'>CALENDAR</h2>
        {this.props.uid && <button className="w3-button w3-teal" onClick={this.handleOpenModal}>Add Event</button>} 
  
        <EventList />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Add event"
          style={modalFormContainerStyle}
          onRequestClose={this.handleCloseModal}
        >
          <AddEvent closeModal={this.handleCloseModal}/>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    uid: state.auth.uid
  }
}

export default connect(mapStateToProps)(Calendar)


// const Calendar = (props) => 
//   <div>
//     <h1>Calendar</h1>
//     <EventListFilters />
//     <EventList />
//     <AddEvent />
//   </div>





