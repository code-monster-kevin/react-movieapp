import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Movie title="The Avengers" category="Action">
          <img src="http://oi60.tinypic.com/2vjvpdg.jpg" alt="Avengers" />
        </Movie>
        <Movie title="Titanic" category="Drama">
          <img src="http://oi39.tinypic.com/2m2uohx.jpg" alt="Titanic" />
        </Movie>
        <Movie title="Deadpool" category="Comedy">
          <img src="http://oi43.tinypic.com/5dru6c.jpg" alt="Deadpool" />
        </Movie>
      </div>
    );
  }
}

export default App;
