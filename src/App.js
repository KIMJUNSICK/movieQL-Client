import React, { Component } from "react";
import client from "./client";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">hello, junsik. This is my Apollo world!</div>
      </ApolloProvider>
    );
  }
}

export default App;
