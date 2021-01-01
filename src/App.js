import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Directors from "./components/AllDirectors";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Main from "./components/main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route path="/movie-detail/:id" component={MovieDetails} />
          <Route path="/movies-carousel/" component={Main} />
          <Route path="/movies-directors/" component={Directors} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
