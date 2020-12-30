import React from 'react';
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
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
      <h2 className="title">{title}</h2>
      <img src={posterUrl} 
        alt={title} />
      <h3 className="director">director: {director}</h3>
      <h3 className="year">year: {year}</h3>
      <p className="duration">duration: {runtime} min</p>
      <p className="genres">genre: {genres}</p>
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
    </div>
  )
}

