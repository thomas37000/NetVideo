import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import "./movie.css";

class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.FetchMovies = this.FetchMovies.bind(this);
  }

  componentDidMount() {
    this.FetchMovies();
  }

  FetchMovies() {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((res) => {
        console.log(res);
        this.setState({ movies: res.data.movies });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="layout2">
        <div className="MovieList">
          <ul>
            <li>{movies.map((movie) => [...movie.director])}</li>
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Directors;
