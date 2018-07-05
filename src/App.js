import React, { Component } from 'react';
import './App.css';
import Movie from './Movie/Movie';
import { getDiscoverMovies } from './Services/DiscoverMovie';
import MovieSortBy from './Movie/MovieSortBy';
import imageMissing from './static/image-missing.png';

class App extends Component {
  state = {
    movies: [],
    sortby: 'popularity.desc',
    page: '1'
  };

  handleSortChanged = event => {
    this.setState({ sortby: event.target.value });
  };

  handlePageChange = event => {
    this.setState({ page: event.target.value });
  };

  loadMovies = () => {
    getDiscoverMovies(this.state.sortby, this.state.page).then(response => {
      if (response.status === 200) {
        this.setState({ movies: response.data.results });
      }
    });
  };

  componentDidMount() {
    this.loadMovies();
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
        <MovieSortBy
          sortby={this.state.sortby}
          handleSortChanged={this.handleSortChanged}
        />
        <span>
          Page:{' '}
          <input
            type="number"
            value={this.state.page}
            min="1"
            max="50"
            onChange={this.handlePageChange}
          />
        </span>
        <button style={btnStyle} onClick={this.loadMovies}>
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
              onError={e => {
                e.target.src = `${imageMissing}`;
              }}
            />
          </Movie>
        ))}
      </div>
    );
  }
}

export default App;
