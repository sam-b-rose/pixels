import get from 'lodash/get';
import noop from 'lodash/noop';

import { Theme, ThemeUtils } from './types';

const negative = noop;
const breakpoints = noop;
const utils: ThemeUtils = {
  breakpoints,
  negative,
};

const resolveTheme = (theme: Theme) => {
  const resolvedTheme: Theme = {};
  const getThemeValue = (path: string, fallback?: any) =>
    get(theme, path, fallback);

  Object.entries(theme).forEach(
    ([key, valueOrFunction]: [key: string, valueOrFunction: any]) => {
      const value =
        typeof valueOrFunction === 'function'
          ? valueOrFunction(getThemeValue, utils)
          : valueOrFunction;

      resolvedTheme[key] = value;
    },
  );

  return resolvedTheme;
};

export default resolveTheme;
