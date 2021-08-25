import React from 'react';
import lightTheme from '../../../../packages/components/themes/light';
import { Box, BoxProps } from '../../../../packages/components/src/Box';

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
