import React, { Component } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import "./movie.css";

class Movie2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      director: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Votre film préféré : ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
      });
  }

  render() {
    const { title, director, year } = this.state;
    return (
      <div className="FormMovie">
        <h2>What's your Favorite Movie ?</h2>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="director">Director</label>
              <input
                type="text"
                id="director"
                name="director"
                onChange={this.onChange}
                value={director}
              />
            </div>

            <div className="form-data">
              <label htmlFor="year">year</label>
              <input
                type="text"
                id="year"
                name="year"
                onChange={this.onChange}
                value={year}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" className="button" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

Movie2.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};

export default Movie2
