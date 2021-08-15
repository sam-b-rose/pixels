import React from 'react';
import type { AppProps } from 'next/app';

import '@pixels/css/dist/style.css';
import '@pixels/themes/dist/style.css';
import '../styles/globals.css';

import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default App;
