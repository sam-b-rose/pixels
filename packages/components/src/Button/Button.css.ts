import { styleVariants } from '@vanilla-extract/css';
import { sprinkles } from '../css/atoms/sprinkles.css';
import { vars } from '../themes/vars.css';

export const size = styleVariants({
  small: [sprinkles({ paddingX: 'medium', paddingY: 'small' })],
  medium: [sprinkles({ paddingX: 'medium', paddingY: 'medium' })],
  large: [sprinkles({ paddingX: 'medium', paddingY: 'large' })],
});

export const variant = styleVariants({
  primary: { background: vars.backgroundColor.brand },
  secondary: { background: vars.backgroundColor.neutral },
  outline: { background: 'transparent' },
  ghost: { background: 'transparent' },
});
