import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Tutorial extends Component {
  componentDidMount () {
    this.props.optionChanged();
  }

  handleCloseModal = () => {
    console.info('close modal');
  }

  render () {
    return (
      <div>
        <button className="btn-tutorial" onClick={ this.handleOpenModal }>Open</button>
        <ReactModal 
          isOpen={ true }
          contentLabel="Minimal Modal Example"
        >
          <button onClick={ this.handleCloseModal }>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default Tutorial;
