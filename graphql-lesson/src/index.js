import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import gql from "graphql-tag";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

const link = createHttpLink({
  uri: "http://35.154.61.191:8080/graphql"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

client
  .query({
    query: gql`
      {
        collections {
          id
          title
          items {
            id
            name
            price
          }
        }
      }
    `
  })
  .then(result => console.log(result))
  .catch(error => console.error(error));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
