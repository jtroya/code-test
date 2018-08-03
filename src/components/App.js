import React, { Component } from 'react';

class App extends Component {
  componentDidMount () {
    this.props.loadApp();
  }
  
  render() {
    return (
      <div className="App">
        <div className="body">
          <div className="container">
          <button className="btn-tutorial">Open</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
