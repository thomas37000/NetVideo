import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MovieList from './MovieList';
import MovieList2 from './MovieList2';
import RecentMovies from './RecentMovies';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        {/* <MovieList /> */}
        {/* <MovieList2 /> */}
        <RecentMovies />
      </div>
    );
  }
}


Main.propTypes = {

};


export default Main;
