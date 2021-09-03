import React from 'react';
import clsx, { ClassValue } from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { atoms, Atoms, sprinkles } from '../css';

type BoxComponent = Polymorphic.ForwardRefComponent<
  'div',
  Atoms & {
    className?: ClassValue;
  }
>;

export type BoxProps = Polymorphic.OwnProps<BoxComponent>;

export const Box = React.forwardRef(
  ({ as: Component = 'div', className, ...props }, ref) => {
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
) as BoxComponent;

Box.displayName = 'Box';
