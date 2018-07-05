import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React Component</h1>
        <p>Some text here</p>
      </div>
    );
    // return React.createElement('div',{ className: 'App'},
    //   React.createElement('h1', null, 'This is a React Component'),
    //   React.createElement('p', null, 'Some text here'));
  }
}

export default App;
