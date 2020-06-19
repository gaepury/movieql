import React from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import {useQuery} from '@apollo/react-hooks'
import Movie from './Movie';
import {HOME_PAGE} from "./query"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => {
  const {loading, data, error} = useQuery(HOME_PAGE)
  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>
      {loading && "Loading"}
      {error && "Something is wrong"}
      {!loading &&
      data &&
      data.movies &&
      data.movies.map(movie => (
        <Movie
          id={movie.id}
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
        />
      ))}
    </Container>
  );
}

export default Home;
