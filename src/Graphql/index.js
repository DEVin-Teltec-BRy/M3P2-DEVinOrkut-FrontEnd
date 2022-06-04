import { ApolloClient, InMemoryCache } from "@apollo/client";

const uriGraphql = process.env.REACT_APP_URI_GRAPHQL;
const headers = {}
if(localStorage.getItem('Token')){
  headers.authorization = localStorage.getItem('Token')
}
export const clientGraphQl = new ApolloClient({
  uri: uriGraphql,
  headers,
  cache: new InMemoryCache(),
});
