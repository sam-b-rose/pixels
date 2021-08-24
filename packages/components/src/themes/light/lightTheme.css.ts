import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import makePixelsTheme from '../makePixelsTheme';

import tokens from './tokens';

export default createTheme(vars, makePixelsTheme(tokens));
