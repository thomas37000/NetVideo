import React, { useState, useEffect } from "react";
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
import "./checkbox.css";

const MovieList = () => {
  const [directorMovies, setDirectorMovies] = useState(false);
  const [directorMovies2, setDirectorMovies2] = useState(false);
  const [directorMovies3, setDirectorMovies3] = useState(false);
  const [durationMovies, setDurationMovies] = useState(false);
  const [recentMovies, setRecentMovies] = useState(false);
  const [genreMovies, setGenreMovies] = useState(false);
  const [oldMovies, setOldMovies] = useState(false);
  const [alphabet, setAlphabet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.movies);
        setMovies(res.data.movies);
        setOldMovies(res.data.movies);
        setGenreMovies(res.data.movies);
        setRecentMovies(res.data.movies);
        setDurationMovies(res.data.movies);
        setDirectorMovies(res.data.movies);
        setDirectorMovies2(res.data.movies);
        setDirectorMovies3(res.data.movies);
      });
  }, []);

  // filterByName() {
  //   const nameAtoZ = this.state.AtoZ.toUpperCase();
  //   this.setState({
  //     AtoZ: !nameAtoZ,
  //   });
  // }

  // handleChange = (event) => {
  //   this.setState({ searchString: event.target.value });
  // };

  return (
    <div className="layout">
      <Row className="py-5">
        <Col>
          <input
            type="text"
            // onChange={handleChange}
            placeholder="search..."
          />
          <Button color="link" onClick={() => setRecentMovies()}>
            {recentMovies ? "all" : "recent movies"}
          </Button>
          {/* <Button color="link" onClick={this.MoviesHandler}>
              {recentMovies ? "1990" : "1990"}
            </Button>
            <Button color="link" onClick={this.MoviesHandler}>
              {recentMovies2 ? "1980" : "1980"}
            </Button> */}
          <Button color="link" onClick={() => setOldMovies()}>
            {oldMovies ? "old movies" : "old movies"}
          </Button>
          <Button color="link" onClick={() => setDurationMovies()}>
            {durationMovies ? "long movies" : "long movies"}
          </Button>

          <UncontrolledDropdown>
            <DropdownToggle color="link" caret>
              Directors
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setDirectorMovies()}>
                {directorMovies
                  ? "Francis Ford Coppola"
                  : "Francis Ford Coppola"}
              </DropdownItem>
              <DropdownItem onClick={() => setDirectorMovies2()}>
                {directorMovies2 ? "Martin Scorsese" : "Martin Scorsese"}
              </DropdownItem>
              <DropdownItem onClick={() => setDirectorMovies3()}>
                {directorMovies3 ? "Tim Burton" : "Tim Burton"}
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <p></p>
          <p></p>
          <UncontrolledDropdown>
            <DropdownToggle color="link" caret>
              Genres
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Action" : "Action"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Adventure" : "Adventure"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Animation" : "Animation"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Biography" : "Biography"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Comedy" : "Comedy"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Crime" : "Crime"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Drama" : "Drama"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Fantasy" : "Fantasy"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Horror" : "Horror"}
              </DropdownItem>
              <DropdownItem onClick={() => setGenreMovies()}>
                {genreMovies ? "Mystery" : "Mystery"}
              </DropdownItem>
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
              ? movie.director === "Francis Ford Coppola"
              : "all" && directorMovies2
              ? movie.director === "Martin Scorsese"
              : "all" && directorMovies3
              ? movie.director === "Tim Burton"
              : "all" && genreMovies
              ? movie.genres[0] === "Action"
              : "all" && genreMovies
              ? movie.genres[0] === "Animation"
              : "all" && genreMovies
              ? movie.genres[0] === "Adventure"
              : "all" && genreMovies
              ? movie.genres[0] === "Biography"
              : "all" && genreMovies
              ? movie.genres[0] === "Comedy"
              : "all" && genreMovies
              ? movie.genres[0] === "Crime"
              : "all" && genreMovies
              ? movie.genres[0] === "Drama"
              : "all" && genreMovies
              ? movie.genres[0] === "Fantasy"
              : "all" && genreMovies
              ? movie.genres[0] === "Horror"
              : "all" && genreMovies
              ? movie.genres[0] === "Mystery"
              : "all";
          })
          // .filter((movie) => {
          //   if (movie.genres[0] === "History") {
          //     return true;
          //   }
          // })
          // .filter((movie) => {
          //   if(searchString == "") {
          //   return movie
          // } else if(movie.) {
          //   return movie
          // }
          // })
          // .map((movie) => [...movie.director])}
          .map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}

        {/* {genres.map((genre) => (
          <Movie key={genre.id} {...genre} />
        ))} */}
      </div>
    </div>
  );
};

export default MovieList;
