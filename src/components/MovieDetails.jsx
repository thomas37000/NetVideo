import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle } from "reactstrap";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesDetail: [],
      genres: [],
    };
    this.getMovie = this.getMovie.bind(this);
    // this.getMovieImages = this.getMovieImages.bind(this);
  }

  componentDidMount() {
    this.getMovie();
    // this.getMovieImages();
  }

  getMovie() {
    const { id } = this.props.match.params;
    axios
      .get(
        `https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json/${id}`
      )
      .then((res) => {
        console.log("movie detail", res);
        this.setState({ movies: res.data.movies, genres: res.data.genres });
      });
  }

  render() {
    const {
      actors,
      director,
      plot,
      genres,
      moviesDetail,
      runtime,
      title,
      year,
    } = this.state;

    return (
      <div className="CardsDetail">
        <Card>
          <CardBody>
            <CardTitle tag="h5">movie: {moviesDetail.title}</CardTitle>
            <h2 className="title">{title}</h2>
            <h3 className="director">director: {director}</h3>
            <h3 className="year">year: {year}</h3>
            <p className="duration">duration: {runtime} min</p>
            <p className="genres">genre: {genres}</p>
            <p className="actors">actors: {actors}</p>
            <p className="description">description: {plot}</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MovieDetails;
