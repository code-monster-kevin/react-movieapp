import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  state = {
    movies: [
      { title: 'The Avengers', category: 'Action', image: 'http://oi60.tinypic.com/2vjvpdg.jpg' },
      { title: 'Titanic', category: 'Drama', image: 'http://oi39.tinypic.com/2m2uohx.jpg' },
      { title: 'Deadpool', category: 'Comedy', image: 'http://oi43.tinypic.com/5dru6c.jpg' }
    ]
  }

  render() {
    return (
      <div className="App">
      {/*
        <Movie title={this.state.movies[0].title} category={this.state.movies[0].category}>
          <img src={this.state.movies[0].image} alt={this.state.movies[0].title} />
        </Movie>
        <Movie title="Titanic" category="Drama">
          <img src="http://oi39.tinypic.com/2m2uohx.jpg" alt="Titanic" />
        </Movie>
        <Movie title="Deadpool" category="Comedy">
          <img src="http://oi43.tinypic.com/5dru6c.jpg" alt="Deadpool" />
        </Movie>
      */}
      {this.state.movies.map(item => (
        <Movie title={item.title} category={item.category}>
          <img src={item.image} alt={item.title} />
        </Movie>
      ))}
      </div>
    );
  }
}

export default App;
