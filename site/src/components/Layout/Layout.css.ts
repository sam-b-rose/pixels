import { style, composeStyles } from '@vanilla-extract/css';
import { atoms, vars } from '../../../../packages/components/src';

export const root = composeStyles(
  atoms({ margin: 'medium' }),
  style({ fontFamily: vars.fontFamily }),
);
