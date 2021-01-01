/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i");

  background: #fff;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .bg {
    position: relative;
  }

  .bg img {
    width: 100vw;
    height: 50vh;
    margin-bottom: -15px;
  }

  .bg,
  .overlay {
    text-align: center;
  }

  .bg .overlay h2 {
    font-family: "Roboto", serif;
    font-size: 3em;
    margin-top: 50px;
    padding-top: 25%;
    padding-bottom: 10px;
  }

  .bg .overlay h2 a,
  .bg .overlay p > a {
    text-decoration: none;
    color: #000;
    background: #fff;
    padding: 10px;
  }

  .bg .overlay p > a {
    font-family: "Roboto", sans-serif;
  }

  .bg .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
  }

  img,
  .overlay {
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    border-radius: 3px;
  }

  @media screen and (min-width: 768px) {
    .bg {
      width: 300px;
      height: 450px;
      box-shadow: gray 3px 3px 5px;
    }

    .bg .overlay {
      opacity: 0;
      background: rgba(0, 0, 0, 0.2);
    }

    .bg .overlay h2 {
      padding-top: 30%;
      margin: auto;
      color: #000080;
    }

    .bg .overlay p > a {
      color: red;
      /* background: #000080; */
    }

    .bg:hover .overlay {
      opacity: 1;
    }

    .bg:hover img {
      -webkit-filter: blur(2px);
      filter: blur(2px);
    }

    .bg img {
      width: 300px;
      height: 450px;
      margin-bottom: -15px;
    }
  }
`;

const Grid = (props) => {
  const { id, posterUrl, title } = props;
  return (
    <Container>
      <div className="bg">
        <img src={posterUrl} alt={title} />
        <div className="overlay">
          <h2>
            <Link to={`/movie-detail/${id}`}>{title}</Link>
          </h2>
          {/* <p>
              <Link to="/metallica/">And Justice for All</Link>
            </p> */}
        </div>
      </div>
    </Container>
  );
};

export default Grid;
