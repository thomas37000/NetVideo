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

import Movie from "./Movie";
import axios from "axios";
import "./movie.css";
import Api from "./Api/Api";


const MovieList = () => {
  const [actionMovies, setActionMovies] = useState(false);
  const [animationMovies, setAnimationMovies] = useState(false);
  const [adventureMovies, setAdventureMovies] = useState(false);
  const [biographyMovies, setBiographyMovies] = useState(false);
  const [comedyMovies, setComedyMovies] = useState(false);
  const [crimeMovies, setCrimeMovies] = useState(false);
  const [directorMovies, setDirectorMovies] = useState(false);
  const [directorMovies2, setDirectorMovies2] = useState(false);
  const [directorMovies3, setDirectorMovies3] = useState(false);
  const [dramaMovies, setDramaMovies] = useState(false);
  const [durationMovies, setDurationMovies] = useState(false);
  const [fantasyMovies, setFantasyMovies] = useState(false);
  const [familyMovies, setFamilyMovies] = useState(false);
  const [historyMovies, setHistoryMovies] = useState(false);
  const [horrorMovies, setHorrorMovies] = useState(false);
  const [musicalMovies, setMusicalMovies] = useState(false);
  const [mysteryMovies, setMysteryMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [oldMovies, setOldMovies] = useState(false);
  const [recentMovies, setRecentMovies] = useState(false);
  const [romanceMovies, setRomanceMovies] = useState(false);
  const [sfMovies, setSfMovies] = useState(false);
  const [sportMovies, setSportMovies] = useState(false);
  const [thrillerMovies, setThrillerMovies] = useState(false);
  const [warMovies, setWarMovies] = useState(false);
  const [westernMovies, setWesternMovies] = useState(false);
  // filtre by Name de A à Z
  // const [alphabet, setAlphabet] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${Api}`).then((res) => {
      console.log(res);
      setMovies(res.data.movies);
    });
  }, []);

  return (
    <div className="layout">
      <Row className="py-5">
        <Col>
          <input
            type="text"
            value={search}
            placeholder="search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onKeyPress={() => {}}
          />
          <Button onClick={() => setSearch("")}>reset</Button>

          <UncontrolledDropdown>
            <DropdownToggle color="link" caret>
              Search Films by Name
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setDirectorMovies(!directorMovies)}>
                A
              </DropdownItem>
              <DropdownItem
                onClick={() => setDirectorMovies2(!directorMovies2)}
              >
                B
              </DropdownItem>
              <DropdownItem
                onClick={() => setDirectorMovies3(!directorMovies3)}
              >
                C
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* <Button color="link" onClick={this.MoviesHandler}>
              {recentMovies ? "1990" : "1990"}
            </Button>
            <Button color="link" onClick={this.MoviesHandler}>
              {recentMovies2 ? "1980" : "1980"}
            </Button> */}
          <Button color="link" onClick={() => setRecentMovies(!recentMovies)}>
            {recentMovies ? "all" : "recent movies"}
          </Button>
          <Button color="link" onClick={() => setOldMovies(!oldMovies)}>
            {oldMovies ? "all" : "old movies"}
          </Button>
          <Button
            color="link"
            onClick={() => setDurationMovies(!durationMovies)}
          >
            {durationMovies ? "all" : "long movies"}
          </Button>

          <UncontrolledDropdown>
            <DropdownToggle color="link" caret>
              Directors
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setDirectorMovies(!directorMovies)}>
                {directorMovies
                  ? "Francis Ford Coppola"
                  : "Francis Ford Coppola"}
              </DropdownItem>
              <DropdownItem
                onClick={() => setDirectorMovies2(!directorMovies2)}
              >
                {directorMovies2 ? "Martin Scorsese" : "Martin Scorsese"}
              </DropdownItem>
              <DropdownItem
                onClick={() => setDirectorMovies3(!directorMovies3)}
              >
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
              <DropdownItem onClick={() => setActionMovies(!actionMovies)}>
                {actionMovies ? "Action" : "Action"}
              </DropdownItem>
              <DropdownItem
                onClick={() => setAdventureMovies(!adventureMovies)}
              >
                {adventureMovies ? "Adventure" : "Adventure"}
              </DropdownItem>
              <DropdownItem
                onClick={() => setAnimationMovies(!animationMovies)}
              >
                {animationMovies ? "Animation" : "Animation"}
              </DropdownItem>
              <DropdownItem
                onClick={() => setBiographyMovies(!biographyMovies)}
              >
                {biographyMovies ? "Biography" : "Biography"}
              </DropdownItem>
              <DropdownItem onClick={() => setComedyMovies(!comedyMovies)}>
                {comedyMovies ? "Comedy" : "Comedy"}
              </DropdownItem>
              <DropdownItem onClick={() => setCrimeMovies(!crimeMovies)}>
                {crimeMovies ? "Crime" : "Crime"}
              </DropdownItem>
              <DropdownItem onClick={() => setDramaMovies(!dramaMovies)}>
                {dramaMovies ? "Drama" : "Drama"}
              </DropdownItem>
              <DropdownItem onClick={() => setFamilyMovies(!familyMovies)}>
                {familyMovies ? "Family" : "Family"}
              </DropdownItem>
              <DropdownItem onClick={() => setFantasyMovies(!fantasyMovies)}>
                {fantasyMovies ? "Fantasy" : "Fantasy"}
              </DropdownItem>
              <DropdownItem onClick={() => setHistoryMovies(!historyMovies)}>
                {historyMovies ? "History" : "History"}
              </DropdownItem>
              <DropdownItem onClick={() => setHorrorMovies(!horrorMovies)}>
                {horrorMovies ? "Horror" : "Horror"}
              </DropdownItem>
              <DropdownItem onClick={() => setMusicalMovies(!musicalMovies)}>
                {musicalMovies ? "Musical" : "Musical"}
              </DropdownItem>
              <DropdownItem onClick={() => setMysteryMovies(!mysteryMovies)}>
                {mysteryMovies ? "Mystery" : "Mystery"}
              </DropdownItem>
              <DropdownItem onClick={() => setRomanceMovies(!romanceMovies)}>
                {romanceMovies ? "Romance" : "Romance"}
              </DropdownItem>
              <DropdownItem onClick={() => setSfMovies(!sfMovies)}>
                {sfMovies ? "Sci-Fi" : "Sci-Fi"}
              </DropdownItem>
              <DropdownItem onClick={() => setSportMovies(!sportMovies)}>
                {sportMovies ? "Sport" : "Sport"}
              </DropdownItem>
              <DropdownItem onClick={() => setThrillerMovies(!thrillerMovies)}>
                {thrillerMovies ? "Thriller" : "Thriller"}
              </DropdownItem>
              <DropdownItem onClick={() => setWarMovies(!warMovies)}>
                {warMovies ? "War" : "War"}
              </DropdownItem>
              <DropdownItem onClick={() => setWesternMovies(!westernMovies)}>
                {westernMovies ? "Western" : "Western"}
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
            if (search === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return movie;
            }
            return false;
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
              : "all" && actionMovies
              ? movie.genres[0] === "Action"
              : "all" && animationMovies
              ? movie.genres[0] === "Animation"
              : "all" && adventureMovies
              ? movie.genres[0] === "Adventure"
              : "all" && biographyMovies
              ? movie.genres[0] === "Biography"
              : "all" && comedyMovies
              ? movie.genres[0] === "Comedy"
              : "all" && crimeMovies
              ? movie.genres[0] === "Crime"
              : "all" && dramaMovies
              ? movie.genres[0] === "Drama"
              : "all" && familyMovies
              ? movie.genres[(1, 2)] === "Family"
              : "all" && fantasyMovies
              ? movie.genres[0] === "Fantasy"
              : "all" && historyMovies
              ? movie.genres[(1, 2)] === "History"
              : "all" && horrorMovies
              ? movie.genres[0] === "Horror"
              : "all" && musicalMovies
              ? movie.genres[1] === "Musical"
              : "all" && mysteryMovies
              ? movie.genres[0] === "Mystery"
              : "all" && romanceMovies
              ? movie.genres[(1, 2)] === "Romance"
              : "all" && sfMovies
              ? movie.genres[(1, 2)] === "Sci-Fi"
              : "all" && sportMovies
              ? movie.genres[(1, 2)] === "Sport"
              : "all" && thrillerMovies
              ? movie.genres[2] === "Thriller"
              : "all" && warMovies
              ? movie.genres[(1, 2)] === "War"
              : "all" && westernMovies
              ? movie.genres[1] === "Western"
              : "all";
          })
          .map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
