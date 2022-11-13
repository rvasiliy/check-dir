import { statSync } from 'fs';
import { isAbsolute } from 'path';

/**
 * Checks if the path is a directory
 *
 * @param {string} path Absolute path
 *
 * @return {boolean}
 * @throws {RangeError}
 */
export function checkDirectory(path) {
  if (!isAbsolute(path)) {
    throw new RangeError('Path is not absolute');
  }

  const stat = statSync(path, { throwIfNoEntry: false });

  return stat && stat.isDirectory();
}
