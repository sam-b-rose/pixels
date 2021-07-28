import { ComponentProps } from 'react';
import { styled } from 'goober';

import {
  COMMON,
  CommonProps,
  SystemCommonProps,
  SystemTypographyProps,
  TYPOGRAPHY,
} from '../constants';

const Text = styled('span')<
  CommonProps & SystemTypographyProps & SystemCommonProps
>`
  ${COMMON};
  ${TYPOGRAPHY};
`;

export type TextProps = ComponentProps<typeof Text>;
export default Text;
