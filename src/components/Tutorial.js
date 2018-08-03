import React, { Component } from 'react';
import ReactModal from 'react-modal';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');
class Tutorial extends Component {

  handleCloseModal = () => {
    this.props.closeModal();
  }

  render () {
    const { isOpen } = this.props;
    return (
      <div>
        <ReactModal 
          isOpen={ isOpen }
          contentLabel="Minimal Modal Example"
        >
          <div className="header">
            <h2>What I need to know to create a Bot?</h2>
          </div>
          <div className="body"></div>
          <div className="footer">
            <button onClick={ this.handleCloseModal }>Skip tutorial</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Tutorial;
