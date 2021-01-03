import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/MoviesContext";
import PropTypes from "prop-types";
import "./movie.css";

const Movie = (props) => {
  const  [favourite, toggleStatus]   = useContext(MovieContext);

  const {
    actors,
    id,
    director,
    plot,
    posterUrl,
    genres,
    runtime,
    title,
    year,
  } = props;

  return (
    <div className="movieCard">
      <img src={posterUrl} alt={title} />
      <h1 className="title">{title}</h1>
      <h3 className="director">director: {director}</h3>
      <h3 className="year">year: {year}</h3>
      <p className="duration">duration: {runtime} min</p>
      <p className="genres">genre: {`${genres}`}</p>
      <p className="actors">actors: {actors}</p>
      <p className="description">description: {plot}</p>
      <Button
        color="success"
        className="Button"
        tag={Link}
        to={`/movie-detail/${id}`}
      >
        Wiew More
      </Button>
      <Button
        onClick={toggleStatus}
        color="light"
        className={favourite ? "isFavorite" : "notFavorite"}
      ></Button>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};

export default Movie;
