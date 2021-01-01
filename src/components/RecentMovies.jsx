import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Container, Button } from "reactstrap";
import Carousel from "react-elastic-carousel";
import axios from "axios";
// import MovieCard from "./MovieCard";
import Grid from "./MovieCard2";
import "./Main.css";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 4 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default class RecentMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
      recentMovies: true,
      movies: [
        { id: 1, title: "" },
        { id: 2, title: "" },
        { id: 3, title: "" },
        { id: 4, title: "" },
        { id: 5, title: "" },
      ],
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

  render() {
    const {
      movies,
      oldMovies,
      recentMovies,
    } = this.state;

    return (
      <Carousel breakPoints={breakPoints}>
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
      </Carousel>
    );
  }
}
