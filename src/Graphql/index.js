import { ApolloClient, InMemoryCache } from "@apollo/client";

const uriGraphql = process.env.REACT_APP_URI_GRAPHQL;


export const clientGraphQl = new ApolloClient({
  uri: uriGraphql,
  headers: {
    authorization: process.env.REACT_APP_TOKEN_AUTH
  },
  cache: new InMemoryCache(),
});
