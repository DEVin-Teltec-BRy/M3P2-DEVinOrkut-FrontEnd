import { ApolloClient, InMemoryCache } from "@apollo/client";

const uriGraphql = process.env.REACT_APP_URI_GRAPHQL;
const token = process.env.REACT_APP_TOKEN_AUTH;

export const clientGraphQl = new ApolloClient({
  uri: uriGraphql,
 
  cache: new InMemoryCache(),
});
