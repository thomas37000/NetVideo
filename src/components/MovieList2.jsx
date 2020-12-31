import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "reactstrap";
import axios from "axios";
// import MovieCard from "./MovieCard";
import Grid from "./MovieCard2";
import "./Main.css";

export default class MovieList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      filter: false,
      directorMovies: false,
      durationMovies: false,
      genreMovies: false,
      oldMovies: false,
      recentMovies: false,
      searchString: "",
    };
    this.FetchMovies = this.FetchMovies.bind(this);
    this.MoviesHandler = this.MoviesHandler.bind(this);
    this.MoviesHandler2 = this.MoviesHandler2.bind(this);
    this.MoviesHandler3 = this.MoviesHandler3.bind(this);
    this.MoviesHandler4 = this.MoviesHandler4.bind(this);
    this.MovieDirector = this.MovieDirector.bind(this);
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
          <Col>
            <input
              type="text"
              onChange={handleChange}
              placeholder="search..."
            />
            <Button onClick={this.MoviesHandler}>
              {recentMovies ? "all movies" : "recent movies"}
            </Button>
            <Button onClick={this.MoviesHandler2}>
              {oldMovies ? "all movies" : "old movies"}
            </Button>
            <Button onClick={this.MoviesHandler3}>
              {durationMovies ? "all movies" : "long movies"}
            </Button>

            <Button onClick={this.MovieDirector}>
              {directorMovies ? "all movies" : "Tim Burton"}
            </Button>
            <Button onClick={this.MoviesHandler4}>
              {genreMovies ? "all movies" : "War movies"}
            </Button>
          </Col>

          
            {movies
              .filter((movie) => {
                return recentMovies
                  ? parseInt(movie.year) >= 2010
                  : true && oldMovies
                  ? parseInt(movie.year) <= 1980
                  : true && durationMovies
                  ? parseInt(movie.runtime) >= 180
                  : true && directorMovies
                  ? movie.director === "Tim Burton"
                  : "all" && genreMovies
                  ? movie.genres === "War"
                  : "all";
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
