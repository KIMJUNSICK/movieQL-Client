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
