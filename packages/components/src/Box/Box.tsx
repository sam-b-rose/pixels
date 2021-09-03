import clsx, { ClassValue } from 'clsx';
import React from 'react';
import { atoms, Atoms, sprinkles } from '../css';

export interface BoxProps
  extends Omit<
      React.AllHTMLAttributes<HTMLElement>,
      'height' | 'width' | 'color' | 'as' | 'className'
    >,
    Atoms {
  as?: React.ElementType;
  className?: ClassValue;
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', className, ...props }: BoxProps, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const userClasses = clsx(className);
    const atomicClasses = atoms(atomProps);

    return (
      <Component
        ref={ref}
        className={`${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`}
        {...nativeProps}
      />
    );
  },
);

Box.displayName = 'Box';
