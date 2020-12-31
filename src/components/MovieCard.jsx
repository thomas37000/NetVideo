import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
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
      <Button
        color="success"
        className="Button"
        tag={Link}
        to={`/movie-detail/${id}`}
      >
        Wiew More
      </Button>
    </div>
  );
}
