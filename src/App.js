import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';

class App extends Component {
  state = {
    movies: [
      { title: 'Incredibles 2', description: 'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.', image: 'http://image.tmdb.org/t/p/original/x1txcDXkcM65gl7w20PwYSxAYah.jpg' },
      { title: 'Jurassic World: Fallen Kingdom', description: 'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.', image: 'http://image.tmdb.org/t/p/original/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg' },
      { title: 'Thor: Ragnarok', description: 'Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela', image: 'http://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg' }
    ]
  }

  handleClick = () => {
    this.setState( { movies: [
      { title: 'Rampage', description: 'Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.', image: 'http://image.tmdb.org/t/p/original/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg' },
    ]})
  }

  render() {
    const btnStyle = {
      backgroundColor: '#ccf',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
      <button
        style={btnStyle} 
        onClick={this.handleClick}>Update State</button>
      <br />
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
