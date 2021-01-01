import React, { Component } from "react";
// import PropTypes from 'prop-types';
import RecentMovies from "./RecentMovies";
import OldMovies from "./OldMovies";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <RecentMovies />
        <OldMovies />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
