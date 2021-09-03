import React from 'react';
import ReactDOM from 'react-dom';

import IndexPage from './pages';

import '@pixels/components/reset';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>,
  document.getElementById('root'),
);
