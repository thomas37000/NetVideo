import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import Api from "./Api/Api";
import axios from "axios";
import "./movie.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [data] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(
          `${Api}`
        );
        // obligé de mettre un parseInt pour récupérer l' id 
        // car il le considère comme du texte
        setMovieDetail(res.data.movies.filter((movie) => {
          return movie.id === parseInt(id);
        })[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetail();
  }, [id]);
  console.log(movieDetail);

  if (!movieDetail) return <div>err...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const {
    actors,
    director,
    plot,
    genres,
    moviesDetail,
    runtime,
    title,
    year,
  } = data;

  return (
    <div className="CardsDetail">
      <Card>
        <CardBody>
          <CardTitle tag="h5">movie: {movieDetail.title}</CardTitle>
          <h2 className="title">{movieDetail.title}</h2>
          <h3 className="director">director: {movieDetail.director}</h3>
          <h3 className="year">year: {movieDetail.year}</h3>
          <p className="duration">duration: {movieDetail.runtime} min</p>
          <p className="genres">genre: {movieDetail.genres}</p>
          <p className="actors">actors: {movieDetail.actors}</p>
          <p className="description">description: {movieDetail.plot}</p>
        </CardBody>
      </Card>
    </div>
  );
};
MovieDetails.propTypes = {
  actors: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieDetails;
