import dedent from 'dedent';

let resetImported = false;

export const markResetImported = () => {
  resetImported = true;
};

export const ensureResetImported = () => {
  if (!resetImported) {
    throw new Error(dedent`
      Pixels components imported before reset.
      Make sure to import the Pixels reset module before importing any components. 
      This ensures the CSS reset does not override the component styles. 
    
      e.g.
      import '@pixels/css/reset'; // <-- Must be first
      import { PixelsProvider, Box } from '@pixels/components';
    `);
  }
};
