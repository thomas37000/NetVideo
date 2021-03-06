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

class MovieFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      AtoZ: false,
      directorMovies: false,
      durationMovies: false,
      genreMovies: false,
      oldMovies: false,
      recentMovies: false,
      recentMovies2: false,
      searchString: "",
    };
    this.Movies1980 = this.Movies1980.bind(this);
    this.FetchMovies = this.FetchMovies.bind(this);
    this.MoviesHandler = this.MoviesHandler.bind(this);
    this.MoviesHandler2 = this.MoviesHandler2.bind(this);
    this.MoviesHandler3 = this.MoviesHandler3.bind(this);
    this.MovieGenre = this.MovieGenre.bind(this);
    this.MovieDirector = this.MovieDirector.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  componentDidMount() {
    this.FetchMovies();
    this.MoviesHandler();
    this.MoviesHandler2();
    this.MoviesHandler3();
    this.MovieGenre();
    this.MovieDirector();
    this.Movies1980();
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

  Movies1980() {
    console.log("test");
    const Recent2 = this.state.recentMovies;
    this.setState({
      recentMovies2: !Recent2,
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

  MovieGenre() {
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
      recentMovies2,
    } = this.state;

    return (
      <Col>
        <input type="text" onChange={handleChange} placeholder="search..." />
        <Button color="link" onClick={this.MoviesHandler}>
          {recentMovies ? "recent movies" : "recent movies"}
        </Button>
        <Button color="link" onClick={this.MoviesHandler}>
          {recentMovies ? "1990" : "1990"}
        </Button>
        <Button color="link" onClick={this.Movies1980}>
          {recentMovies2 ? "1980" : "1980"}
        </Button>
        <Button color="link" onClick={this.MoviesHandler2}>
          {oldMovies ? "old movies" : "old movies"}
        </Button>
        <Button color="link" onClick={this.MoviesHandler3}>
          {durationMovies ? "long movies" : "long movies"}
        </Button>
        <Button color="link" onClick={this.MovieDirector}>
          {directorMovies ? "Tim Burton" : "Tim Burton"}
        </Button>
        <UncontrolledDropdown>
          <DropdownToggle color="link" caret>
            Genres
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Action" : "Action"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Adventure" : "Adventure"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Animation" : "Animation"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Biography" : "Biography"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Comedy" : "Comedy"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Crime" : "Crime"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Drama" : "Drama"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Fantasy" : "Fantasy"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Horror" : "Horror"}
            </DropdownItem>
            <DropdownItem onClick={this.MovieGenre}>
              {genreMovies ? "Mystery" : "Mystery"}
            </DropdownItem>
            {/* <DropdownItem divider />
                <DropdownItem disabled onClick={this.MovieGenre}>
                  {genreMovies ? "Family" : "Family"}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled onClick={this.MovieGenre}>
                  {genreMovies ? "History" : "History"}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.MovieGenre}>
                  {genreMovies ? "Musical" : "Musical"}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.MovieGenre}>
                  {genreMovies ? "Romance" : "Romance"}
                </DropdownItem>
                <DropdownItem disabled onClick={this.MovieGenre}>
                  {genreMovies ? "Sci-Fi" : "Sci-Fi"}
                </DropdownItem>
                <DropdownItem onClick={this.MovieGenre}>
                  {genreMovies ? "Sport" : "Sport"}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled onClick={this.MovieGenre}>
                  {genreMovies ? "Thriller" : "Thriller"}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>War</DropdownItem>
                <DropdownItem onClick={this.MovieGenre}>
                  {genreMovies ? "Western" : "Western"}
                </DropdownItem>*/}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Col>
    );
  }
}

export default MovieFilters;
