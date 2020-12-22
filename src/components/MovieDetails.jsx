import React, { Component } from 'react';
import axios from 'axios';

class MovieDetails extends Component {
  
  
  // componentDidMount() {
  //   const { match: { params } } = this.props;
  
  //   axios.get(`/api/users/${params.userId}`)
  //     .then(({ data: user }) => {
  //       console.log('user', user);
  
  //       this.setState({ user });
  //     });
  // }
  render() {
    return (
      <div>
        {/* <div>{id}</div>
        <div>{title}</div> */}
      </div>
    );
  }
}

export default MovieDetails;
