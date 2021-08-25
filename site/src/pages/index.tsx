import React, { useState } from 'react';
import { Box } from '../../../packages/components/src/Box';

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
        <Box component="p" margin="medium">
          Hello Vite + React!
        </Box>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Box
            component="a"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Box>
          {' | '}
          <Box
            component="a"
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
