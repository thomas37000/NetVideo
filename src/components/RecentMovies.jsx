import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "reactstrap";
import axios from "axios";
// import MovieCard from "./MovieCard";
import Grid from "./MovieCard2";
import "./Main.css";

export default class RecentMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      filter: false,
      recentMovies: true,
    };
    this.FetchMovies = this.FetchMovies.bind(this);
    this.MoviesHandler = this.MoviesHandler.bind(this);
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

  MoviesHandler() {
    console.log("test");
    const Recent = this.state.recentMovies;
    this.setState({
      recentMovies: !Recent,
    });
  }

  MoviesHandler2() {
    const Old = this.state.oldMovies;
    this.setState({
      oldMovies: !Old,
    });
  }

  MoviesHandler3() {
    const Time = this.state.durationMovies;
    this.setState({
      durationMovies: !Time,
    });
  }

  MoviesHandler4() {
    const Genre = this.state.genreMovies;
    this.setState({
      genreMovies: !Genre,
    });
  }

  MovieDirector() {
    const Director = this.state.directorMovies;
    this.setState({
      directorMovies: !Director,
    });
  }

  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

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
              return recentMovies
                ? parseInt(movie.year) >= 2010
                : true && oldMovies;
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
