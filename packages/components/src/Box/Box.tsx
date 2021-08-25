import clsx, { ClassValue } from 'clsx';
import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
} from 'react';
import { atoms, Atoms, sprinkles } from '../css';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'height' | 'width' | 'color' | 'className'
    >,
    Atoms {
  component?: ElementType;
  className?: ClassValue;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', className, ...props }: BoxProps, ref) => {
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

    return createElement(component, {
      className: `${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`,
      ...nativeProps,
      ref,
    });
  },
);

Box.displayName = 'Box';
