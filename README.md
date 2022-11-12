# Check directory

Check a path if this is directory

## Use in cli

`checkdir src`, where

-   **src** - path relative of current directory

## Use in javascript

```javascript
import { checkDirectory } from '@rvasiliy/check-dir';

try {
    const path = '/'; // must by absolute
    const isDir = checkDirectory(path);
} catch (e) {
    // if path is not absolute
}
```
