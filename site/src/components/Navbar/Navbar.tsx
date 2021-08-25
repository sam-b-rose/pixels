import React from 'react';
import { Box, BoxProps } from '../../../../packages/components/src/Box';

import * as styles from './Navbar.css';

const Layout = ({ className, ...props }: BoxProps) => {
  return (
    <Box component="nav" className={[styles.root, className]} {...props} />
  );
};

export default Layout;
