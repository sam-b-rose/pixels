import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import resolveTheme from './resolveTheme';
import theme from './theme';

const filepath = path.resolve(__dirname, '../src/index.ts');
const text = 'export default ' + JSON.stringify(resolveTheme(theme), null, 2);

prettier.resolveConfig(filepath).then((options) => {
  const output = prettier.format(text, { filepath, ...options });
  fs.writeFileSync(filepath, output);
});
