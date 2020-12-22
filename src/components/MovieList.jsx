import React, { Component } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import Movie from "./Movie";
import Axios from "axios";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      recentMovies: false,
      durationMovies: false,
      crimeMovies: false,
      // movies: [
      //   {
      //     id: 1,
      //     title: "Beetlejuice",
      //     year: "1988",
      //     runtime: "92",
      //     genres: ["Comedy", "Fantasy"],
      //     director: "Tim Burton",
      //     actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      //     plot:
      //       'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      //     posterUrl:
      //       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
      //   },
      //   {
      //     id: 2,
      //     title: "The Cotton Club",
      //     year: "1984",
      //     runtime: "127",
      //     genres: ["Crime", "Drama", "Music"],
      //     director: "Francis Ford Coppola",
      //     actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      //     plot:
      //       "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      //     posterUrl:
      //       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
      //   },
      //   {
      //     id: 3,
      //     title: "The Shawshank Redemption",
      //     year: "1994",
      //     runtime: "142",
      //     genres: ["Crime", "Drama"],
      //     director: "Frank Darabont",
      //     actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      //     plot:
      //       "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      //     posterUrl:
      //       "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
      //   },
      // ],
    };
    this.FetchMovies = this.FetchMovies.bind(this);
    this.MoviesHandler = this.MoviesHandler.bind(this);
  }

  componentDidMount() {
    this.FetchMovies();
  }

  FetchMovies() {
    Axios.get(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    ).then((res) => this.setState({ movies: res.data.movies }));
  }

  MoviesHandler() {
    console.log("test");
    const Recent = this.state.recentMovies;
    const Time = this.state.durationMovies;
    const Crime = this.state.crimeMovies;
    this.setState({
      recentMovies: !Recent,
      durationMovies: !Time,
      crimeMovies: !Crime,
    });
  }

  render() {
    const { crimeMovies, durationMovies, movies, recentMovies } = this.state;
    return (
      <div className="MovieList">
        <Button onClick={this.MoviesHandler}>
          {recentMovies ? "all movies" : "recent movies"}
        </Button>
        <Button onClick={this.MoviesHandler}>
          {durationMovies ? "all movies" : "long movies"}
        </Button>
        <Button onClick={this.MoviesHandler}>
          {crimeMovies ? "all movies" : "Crime movies"}
        </Button>
        {movies
          .filter(
            (movie) => (recentMovies ? parseInt(movie.year) > 2000 : true),
            (movie) => (durationMovies ? parseInt(movie.runtime) > 100 : true),
            (movie) => (crimeMovies ? movie.genres === "Crime" : true)
          )
          .map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
      </div>
    );
  }
}

export default MovieList;
