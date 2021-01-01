import React, { Component } from "react";
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
// import PropTypes from "prop-types";
import Movie from "./Movie";
import axios from "axios";
import "./movie.css";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      AtoZ: false,
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
    this.filterByName = this.filterByName.bind(this);
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

  filterByName() {
    const nameAtoZ = this.state.AtoZ.toUpperCase();
    this.setState({
      AtoZ: !nameAtoZ,
    });
  }

  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const {
      AtoZ,
      directorMovies,
      durationMovies,
      genreMovies,
      handleChange,
      movies,
      oldMovies,
      recentMovies,
    } = this.state;

    return (
      <div className="layout">
        <Row className="py-5">
          <Col>
            <input
              type="text"
              onChange={handleChange}
              placeholder="search..."
            />
            <Button color="link" onClick={this.MoviesHandler}>
              {recentMovies ? "all movies" : "recent movies"}
            </Button>
            <Button color="link" onClick={this.MoviesHandler2}>
              {oldMovies ? "all movies" : "old movies"}
            </Button>
            <Button color="link" onClick={this.MoviesHandler3}>
              {durationMovies ? "all movies" : "long movies"}
            </Button>
            <Button color="link" onClick={this.MovieDirector}>
              {directorMovies ? "all movies" : "Tim Burton"}
            </Button>
            <UncontrolledDropdown>
              <DropdownToggle color="link" caret >Genres</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.MoviesHandler4}>{genreMovies ? "Action" : "Action"}</DropdownItem>
                <DropdownItem onClick={this.MoviesHandler4}>{genreMovies ? "Adventure" : "Adventure"}</DropdownItem>
                <DropdownItem onClick={this.MoviesHandler4}>{genreMovies ? "Comedy" : "Comedy"}</DropdownItem>
                <DropdownItem onClick={this.MoviesHandler4}>{genreMovies ? "Drama" : "Drama"}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>War</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>

        <div className="MovieList">
          {movies
            .sort(function (a, b) {
              return a.title - b.title;
            })
            .filter((movie) => {
              return recentMovies
                ? parseInt(movie.year) >= 2010
                : true && oldMovies
                ? parseInt(movie.year) <= 1980
                : true && durationMovies
                ? parseInt(movie.runtime) >= 180
                : true && directorMovies
                ? movie.director === "Tim Burton"
                : "all" &&  genreMovies
                ? movie.genres[0] === "Action"
                :"all" && genreMovies
                ? movie.genres[0] === "Adventure"
                :"all" && genreMovies
                ? movie.genres[0] === "Comedy"
                :"all" && genreMovies
                ? movie.genres[0] === "Drama"
                :"all" && AtoZ
                ? movie.title
                : "all";
            })
            // .filter((movie) => {
            //   if(searchString == "") {
            //   return movie
            // } else if(movie.) {
            //   return movie
            // }
            // })
            .map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          {/* {genres.map((genre) => (
          <Movie key={genre.id} {...genre} />
        ))} */}
        </div>
      </div>
    );
  }
}

export default MovieList;
