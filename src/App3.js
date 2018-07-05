import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Movie title="The Avengers" category="Action" />
        <Movie title="Titanic" category="Drama" />
        <Movie title="Deadpool" category="Comedy" />
      </div>
    );
  }
}

export default App;
