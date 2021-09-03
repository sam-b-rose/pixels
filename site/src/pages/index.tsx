import React, { useState } from 'react';
import { Box } from '@pixels/components';

import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';

const IndexPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Navbar>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Navbar>
      <header>
        <Box as="p" margin="medium">
          Hello Vite + React!
        </Box>
        <p>
          <Box
            as="button"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Box>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Box
            as="a"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Box>
          {' | '}
          <Box
            as="a"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Box>
        </p>
      </header>
    </Layout>
  );
};

export default IndexPage;
