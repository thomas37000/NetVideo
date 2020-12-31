import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "reactstrap";
import axios from "axios";
// import MovieCard from "./MovieCard";
import Grid from "./MovieCard2";
import "./Main.css";

export default class OldMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filter: false,
      oldMovies: true,
    };
    this.FetchMovies = this.FetchMovies.bind(this);
    this.MoviesHandler2 = this.MoviesHandler2.bind(this);
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
        this.setState({ movies: res.data.movies, genres: res.data.genres });
      });
  }

  MoviesHandler2() {
    const Old = this.state.oldMovies;
    this.setState({
      oldMovies: !Old,
    });
  }
  render() {
    const {
      directorMovies,
      durationMovies,
      genres,
      genreMovies,
      handleChange,
      movies,
      oldMovies,
      recentMovies,
      searchString,
      filter,
    } = this.state;

    return (
      <Container>
        <Row className="py-5">
          {movies
            .filter((movie) => {
              return oldMovies
              ? parseInt(movie.year) <= 1980
              : true && durationMovies
            })
            .map((movie) => (
              <Grid
                {...movie}
                key={movie.id}
                handleClick={() => this.deleteGame(movie.id)}
              />
            ))}
        </Row>
      </Container>
    );
  }
}
