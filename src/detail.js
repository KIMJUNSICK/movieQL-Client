import React from "react";
import { Query } from "react-apollo";

const detail = ({
  match: {
    params: { movieId }
  }
}) => {
  console.log(movieId);
  return <div>detail</div>;
};
export default detail;
