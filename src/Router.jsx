import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Paginations from "./components/Pagination";
import Directors from "./components/AllDirectors";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Main from "./components/main";
import "./App.css";

export default function Routter() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <Paginations />
            <MovieList />
          </Route>
          <Route path="/movie-detail/:id" component={MovieDetails} />
          <Route path="/movies-carousel/" component={Main} />
          <Route path="/movies-directors/" component={Directors} />
          <Redirect to="/movies" />
        </Switch>
      </Router>
    </>
  );
}
