import React from 'react';
import { light } from '@pixels/themes';
import { Box, BoxProps } from '@pixels/components';

import * as styles from './Layout.css';

const Layout = ({ className, ...props }: BoxProps) => {
  return (
    <Box className={[light.vanillaTheme, styles.root, className]} {...props} />
  );
};

export default Layout;
