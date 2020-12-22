import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <>
      <header className="App-header">
          <h1>Movie Club</h1>
          <Link to="/movies">Movie List</Link>
        </header>
    </>
  );
}

export default NavBar;