import { createThemeContract } from '@vanilla-extract/css';

import makePixelsTheme from './makePixelsTheme';
import tokens from './light/tokens';

export const vars = createThemeContract(makePixelsTheme(tokens));
