import React from 'react';
import { light } from '@pixels/themes';
import { Box, BoxProps } from '@pixels/components';

import * as styles from './Navbar.css';

const Layout = ({ className, ...props }: BoxProps) => {
  return (
    <Box
      component="nav"
      className={[light.vanillaTheme, styles.root, className]}
      {...props}
    />
  );
};

export default Layout;
