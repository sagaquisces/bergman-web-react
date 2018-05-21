// Export a stateless functional component
// description, title, date
import React from 'react'
import Modal from 'react-modal'
import EditEvent from './EditEvent'
import moment from 'moment'
import { connect } from 'react-redux'
import { removeEvent } from '../actions/events'

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
}

class EventListItem extends React.Component {
  constructor(props) {
    super(props)

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
    const { dispatch, id, title, description, date } = this.props
    return (
      <div className="w3-third w3-margin-bottom">
        <header className="w3-container w3-red">
          <h3>{moment(date).format('ddd DD MMM YYYY').toUpperCase()}</h3>
        </header>
        <div className='w3-container w3-white'>
          <p><b>{title}</b></p>
          <p className='w3-opacity'>{moment(date).format('ddd DD MMM YYYY').to}</p>
          <p>{description}</p>
          <button 
            className="w3-button w3-teal w3-margin-bottom"
            onClick={this.handleOpenModal}
          >Edit Event
          </button>
          <button
            className="w3-button w3-teal w3-margin-bottom"
            onClick={() => {
              dispatch(removeEvent( {id} ))
            }}
          >Remove</button>
        </div>
        
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Edit event"
          style={customStyles}
          onRequestClose={this.handleCloseModal}
        >
          <EditEvent {...this.props} closeModal={this.handleCloseModal}/>
        </Modal>
      </div>
    )
  }
}

export default connect()(EventListItem)

// const EventListItem = ({ dispatch, id, title, description, date }) => (
// <div>
//   <small>{date}</small>
//   <h3>{title}</h3>
//   <p>{description}</p>
//   <button onClick={() => {
//     dispatch(removeEvent( {id} ))
//   }}>Remove</button>
// </div>
// )

// <Modal
//   isOpen={this.state.showModal}
//   contentLabel="Add event"
//   style={customStyles}
//   onRequestClose={this.handleCloseModal}
// >
//   <AddEvent closeModal={this.handleCloseModal}/>
// </Modal>


