import React from 'react';
import lightTheme from '@pixels/components/themes/light';
import { Box, BoxProps } from '@pixels/components';

import * as styles from './Layout.css';

const Layout = ({ className, ...props }: BoxProps) => {
  return (
    <Box
      className={[lightTheme.vanillaTheme, styles.root, className]}
      {...props}
    />
  );
};

export default Layout;
