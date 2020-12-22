import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../App.css";

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
    <div>
      {/* <img src={posterUrl} alt={title} />
      <h1>{title}</h1>
      <h3>director: {director}</h3>
      <h3>year: {year}</h3>
      <p>duration: {runtime} min</p>
      <p>genre: {genres}</p>
      <p>actors: {actors}</p>
      <p>description: {plot}</p>
      <button>
        <Link to={`/movie-detail/${id}`}>Wiew More</Link>
      </button> */}

      <Card className="movieCard">
        <CardImg top width="23%" src={posterUrl} alt={title} />
        <CardBody>
          <CardTitle tag="h2">{title}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">
            genre: {genres}
          </CardSubtitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">
            duration: {runtime} min
          </CardSubtitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">
            {year}
          </CardSubtitle>
          <CardText>{plot}</CardText>
          <Link to={`/movie-detail/${id}`}>
            <Button color="success" className="Button">
              Wiew More
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};
