import { style, composeStyles } from '@vanilla-extract/css';
import { atoms } from '@pixels/css';
import { vars } from '@pixels/themes';

export const root = composeStyles(
  atoms({ margin: 'medium' }),
  style({ fontFamily: vars.fontFamily }),
);
