import React, { Component } from "react";
import axios from "axios";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// componentDidMount() {
//   const { match: { params } } = this.props;

//   axios.get(`/api/users/${params.userId}`)
//     .then(({ data: user }) => {
//       console.log('user', user);

//       this.setState({ user });
//     });
// }

// render() {
//   return (
//     <div>
//       {/* <div>{id}</div>
//       <div>{title}</div> */}
//     </div>
//   );
// }

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesDetail: [],
      genres: [],
      detailClip: {},
    };
    this.getGame = this.getGame.bind(this);
    // this.getGameImages = this.getGameImages.bind(this);
  }

  componentDidMount() {
    this.getGame();
    // this.getGameImages();
  }

  getGame() {
    const { id } = this.props.match.params;
    console.log(id);
    axios
      .get(
        `https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json/${id}`
      )
      .then((res) =>
        this.setState({
          moviesDetail: res.data.movies,
          genres: res.data.genres,
        })
      );
  }
  
  render() {
    const { moviesDetail, genres} = this.state;

    return (
      <div className="CardsDetail">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{moviesDetail.title}</CardTitle>
            <CardText>genre : {genres.name}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MovieDetails;
