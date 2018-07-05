import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie
          title="Incredibles 2"
          description="Elastigirl springs into action"
        >
          <img
            src="http://image.tmdb.org/t/p/original/x1txcDXkcM65gl7w20PwYSxAYah.jpg"
            alt="Avengers"
          />
        </Movie>
        <Movie
          title="Jurassic World"
          description="Volcanic eruption threatens the remaining dinosaurs"
        >
          <img
            src="http://image.tmdb.org/t/p/original/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg"
            alt="Titanic"
          />
        </Movie>
        <Movie
          title="Thor: Ragnarok"
          description="Thor is on the other side of the universe"
        >
          <img
            src="http://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
            alt="Deadpool"
          />
        </Movie>
      </div>
    );
  }
}

export default App;
