import React from 'react';
import { Box } from '@pixels/components';

import * as styles from './Navbar.css';

const Layout = ({ className = '', ...props }) => {
  return <Box as="nav" className={[styles.root, className]} {...props} />;
};

export default Layout;
