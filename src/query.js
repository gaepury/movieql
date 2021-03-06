import gql from 'graphql-tag'

export const HOME_PAGE = gql`
  query {
    movies(limit: 10, rating: 8.0) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
