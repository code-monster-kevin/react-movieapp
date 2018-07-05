import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Movie title="Incredibles 2" description="Elastigirl springs into action" />
        <Movie title="Jurassic World" description="Volcanic eruption threatens the remaining dinosaurs" />
        <Movie title="Thor: Ragnarok" description="Thor is on the other side of the universe" />
      </div>
    );
  }
}

export default App;
