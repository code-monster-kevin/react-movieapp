import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  state = {
    movies: [
      {
        title: 'Incredibles 2',
        description:
          'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.',
        image:
          'http://image.tmdb.org/t/p/original/x1txcDXkcM65gl7w20PwYSxAYah.jpg'
      },
      {
        title: 'Jurassic World: Fallen Kingdom',
        description:
          'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
        image:
          'http://image.tmdb.org/t/p/original/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg'
      },
      {
        title: 'Thor: Ragnarok',
        description:
          'Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela',
        image:
          'http://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {/*
        <Movie title={this.state.movies[0].title} category={this.state.movies[0].category}>
          <img src={this.state.movies[0].image} alt={this.state.movies[0].title} />
        </Movie>
        <Movie title="Jurassic World" description="Volcanic eruption threatens the remaining dinosaurs">
          <img src="http://image.tmdb.org/t/p/original/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg" alt="Titanic" />
        </Movie>
        <Movie title="Thor: Ragnarok" description="Thor is on the other side of the universe">
          <img src="http://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" alt="Deadpool" />
        </Movie>
      */}
        {this.state.movies.map((item, index) => (
          <Movie key={index} title={item.title} description={item.description}>
            <img src={item.image} alt={item.title} />
          </Movie>
        ))}
      </div>
    );
  }
}

export default App;
