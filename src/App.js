import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./client";

import home from "./home";
import detail from "./detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Route exact={true} path={"/"} component={home} />
            <Route path={"/details/:movieId"} component={detail} />
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
