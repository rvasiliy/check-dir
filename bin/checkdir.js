import { resolve } from 'path';
import minimist from 'minimist';

import { checkDirectory } from '../src/index.js';

const {
  _: [pathForChecking = '.']
} = minimist(process.argv.slice(2));

const path = resolve(process.cwd(), pathForChecking);

if (!checkDirectory(path)) {
  throw new RangeError(`Path "${path}" is not a directory or not exists`);
}
