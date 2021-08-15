import { Box, BoxProps } from '@pixels/components';

import * as styles from './Layout.css';

const Layout = (props: BoxProps) => {
  return <Box className={styles.root} {...props}></Box>;
};

export default Layout;
