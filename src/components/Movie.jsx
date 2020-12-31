import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Main.css";

export default function Movie(props) {
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
      <p className="genres">genre: {genres}</p>
      <p className="actors">actors: {actors}</p>
      <p className="description">description: {plot}</p>
      {/* <button>
        <Link to={`/movie-detail/${id}`}>Wiew More</Link>
      </button> */}
      <Button
        color="success"
        className="Button"
        tag={Link}
        to={`/movie-detail/${id}`}
      >
        Wiew More
      </Button>

      {/* <Card className="movieCard">
        <CardImg top width="23%" src={posterUrl} alt={title} />
        <CardBody>
          <CardTitle tag="h2">{title}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted title">
            genre: {genres}
          </CardSubtitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted duration">
            duration: {runtime} min
          </CardSubtitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted director">
            director: {director}
          </CardSubtitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted actors">
            actors: {actors}
          </CardSubtitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted year">
            {year}
          </CardSubtitle>
          <CardText className="description">{plot}</CardText>

          <Button
            color="success"
            className="Button"
            tag={Link}
            to={`/movie-detail/${id}`}
          >
            Wiew More
          </Button>
        </CardBody>
      </Card> */}
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};
