'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '@/graphql/lib/clientProvider';

const client = createApolloClient();

const Provider = ({ children }: {children : React.ReactNode}) => (
  <ApolloProvider client={ client }>
    { children }
  </ApolloProvider>
);

export default Provider;
