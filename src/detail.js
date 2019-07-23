import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
    {({ loading, error, data }) => {
      if (loading) return "loading";
      if (error) return "error";
      return (
        <Fragment>
          {data.movie.title}
          {data.movie.medium_cover_image}
          {data.movie.rating}
          {data.movie.description_intro}
        </Fragment>
      );
    }}
  </Query>
);

export default detail;
