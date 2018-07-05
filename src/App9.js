import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';
import { getDiscoverMovies } from './Services/DiscoverMovie';

class App extends Component {
  state = {
    movies: []
  };

  handleClick = () => {
    getDiscoverMovies('popularity.desc', '1').then(response => {
      if (response.status === 200) {
        this.setState({ movies: response.data.results });
      }
    });
  };

  render() {
    const btnStyle = {
      backgroundColor: '#ccf',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <button style={btnStyle} onClick={this.handleClick}>
          Update State
        </button>
        <br />
        {this.state.movies.map((item, index) => (
          <Movie
            key={item.id}
            title={item.title}
            description={item.original_title}
          >
            <img
              src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
            />
          </Movie>
        ))}
      </div>
    );
  }
}

export default App;
