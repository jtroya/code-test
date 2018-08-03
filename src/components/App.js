import React, { Component } from 'react';

import Tutorial from './Tutorial';

class App extends Component {
  componentDidMount () {
    this.props.loadApp();
  }

  handleOpenModal = () => {
    this.props.openModal();
  }

  handleCloseModal = () => {
    this.props.skipTutorial();
  }
  
  render() {
    const { showTutorialModal } = this.props;
    return (
      <div className="App">
        <div className="body">
          <div className="container">
          <button className="btn-tutorial" onClick={ this.handleOpenModal }>Open</button>
          <Tutorial isOpen={ showTutorialModal } closeModal={ this.handleCloseModal } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
