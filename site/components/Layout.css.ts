import { style, composeStyles } from '@vanilla-extract/css';
import { atoms } from '@pixels/css';

export const root = composeStyles(
  atoms({ display: 'block' }),
  style({
    textAlign: 'center',
  }),
);
