import { ComponentProps } from 'react';
import { styled } from 'goober';

import {
  COMMON,
  CommonProps,
  FLEX,
  LAYOUT,
  SystemCommonProps,
  SystemFlexProps,
  SystemLayoutProps,
} from '../constants';

const Box = styled('div')<
  CommonProps & SystemCommonProps & SystemFlexProps & SystemLayoutProps
>`
  ${COMMON}
  ${FLEX}
  ${LAYOUT}
`;

export type BoxProps = ComponentProps<typeof Box>;
export default Box;
