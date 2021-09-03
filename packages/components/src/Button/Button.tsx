import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { Box, BoxProps } from '../Box';

import * as styles from './Button.css';

type ButtonComponent = Polymorphic.ForwardRefComponent<
  'button',
  BoxProps & {
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  }
>;

export type ButtonProps = Polymorphic.OwnProps<ButtonComponent>;

export const Button = React.forwardRef(
  (
    {
      as = 'button',
      className,
      size = 'medium',
      variant = 'primary',
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        as={as}
        className={clsx(styles.variant[variant], styles.size[size], className)}
        {...props}
      />
    );
  },
) as ButtonComponent;

Button.displayName = 'Button';
