import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Container, Button } from "reactstrap";
import Carousel from "react-elastic-carousel";
import axios from "axios";
// import MovieCard from "../MovieCard";
import Grid from "./MovieCard2";
import "./movie.css";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 4 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default class OldMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
      oldMovies: true,
      movies: [
        { id: 1, title: "" },
        { id: 2, title: "" },
        { id: 3, title: "" },
        { id: 4, title: "" },
        { id: 5, title: "" },
      ],
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
      durationMovies,
      movies,
      oldMovies,
    } = this.state;

    return (
      <Carousel breakPoints={breakPoints}>
        {movies
          .filter((movie) => {
            return oldMovies
              ? parseInt(movie.year) <= 1980
              : true && durationMovies;
          })
          .map((movie) => (
            <Grid
              {...movie}
              key={movie.id}
              handleClick={() => this.deleteGame(movie.id)}
            />
          ))}
      </Carousel>
    );
  }
}
