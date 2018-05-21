import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import EventList from './EventList'
import EventListFilters from './EventListFilters'
import AddEvent from './AddEvent'

Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginTop             : '20px',
    marginRight           : '-50%',
    minWidth              : '200px',
    transform             : 'translate(-50%, -50%)'
  }
};

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
        <h1>Calendar</h1>
        <EventList />
        <button onClick={this.handleOpenModal}>Add Event</button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Add event"
          style={customStyles}
          onRequestClose={this.handleCloseModal}
        >
          <AddEvent closeModal={this.handleCloseModal}/>
        </Modal>
      </div>
    )
  }

}

// const Calendar = (props) => 
//   <div>
//     <h1>Calendar</h1>
//     <EventListFilters />
//     <EventList />
//     <AddEvent />
//   </div>


export default Calendar



