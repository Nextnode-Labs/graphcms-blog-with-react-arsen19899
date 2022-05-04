import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </UserProvider>
  );
}

export default MyApp;
