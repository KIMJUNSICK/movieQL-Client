import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./client";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import home from "./home";
import detail from "./detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <main>
              <Route exact={true} path={"/"} component={home} />
              <Route path={"/details/:movieId"} component={detail} />
            </main>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
