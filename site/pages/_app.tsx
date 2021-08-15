import React from 'react';
import type { AppProps } from 'next/app';

import '@pixels/css/dist/style.css';
import '@pixels/themes/dist/style.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
