import { style, composeStyles } from '@vanilla-extract/css';
import { atoms, vars } from '@pixels/components';

export const root = composeStyles(
  atoms({ margin: 'medium' }),
  style({ fontFamily: vars.fontFamily }),
);
