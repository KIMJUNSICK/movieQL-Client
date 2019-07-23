import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 30, sort: "rating") {
      id
      title
      genres
      medium_cover_image
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMoiveDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`;
