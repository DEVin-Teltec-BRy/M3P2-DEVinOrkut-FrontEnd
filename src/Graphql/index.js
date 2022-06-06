import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uriGraphql = process.env.REACT_APP_URI_GRAPHQL;

const httpLink = createHttpLink({
  uri: uriGraphql,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('Token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const clientGraphQl = new ApolloClient({
  uri: uriGraphql,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
