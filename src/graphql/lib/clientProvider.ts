// client-side-code.js

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;

const httpLink = createHttpLink({
  uri,
});

function createApolloClient() {
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return client;
}

export default createApolloClient;
