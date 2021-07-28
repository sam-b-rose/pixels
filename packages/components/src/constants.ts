import { themeGet } from '@styled-system/theme-get';
import { ElementType } from 'react';
import * as styledSystem from 'styled-system';
import theme from './themes';

const { get: getKey, compose, system } = styledSystem;

export const get = (key: string) => themeGet(key, getKey(theme, key));

export type ThemeType = typeof theme;

export interface CommonProps {
  as?: ElementType;
}

// Common props
export const COMMON = compose(
  styledSystem.space,
  styledSystem.color,
  styledSystem.display,
);
export interface SystemCommonProps
  extends styledSystem.ColorProps<ThemeType>,
    styledSystem.SpaceProps<ThemeType>,
    styledSystem.DisplayProps<ThemeType> {}

// Typography props
const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  },
});
export const TYPOGRAPHY = compose(styledSystem.typography, whiteSpace);
export interface SystemTypographyProps
  extends styledSystem.TypographyProps<ThemeType> {
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
}

// Border props
export const BORDER = compose(styledSystem.border, styledSystem.shadow);
export interface SystemBorderProps
  extends styledSystem.BorderProps,
    styledSystem.ShadowProps {}

// Layout props
export const LAYOUT = styledSystem.layout;
export type SystemLayoutProps = styledSystem.LayoutProps;

// Position props
export const POSITION = styledSystem.position;
export type SystemPositionProps = styledSystem.PositionProps;

// Flex props
export const FLEX = styledSystem.flexbox;
export type SystemFlexProps = styledSystem.FlexboxProps;

// Grid props
export const GRID = styledSystem.grid;
export type SystemGridProps = styledSystem.GridProps;
