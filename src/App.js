import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
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
          <Redirect to="/movies" />
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
