# cookie-maker

This is a meta-package of [cookie](https://www.npmjs.com/package/cookie) and [js-cookie](https://www.npmjs.com/package/js-cookie) with TypeScript support.

Please go to [cookie](https://www.npmjs.com/package/cookie) and [js-cookie](https://www.npmjs.com/package/js-cookie) for documentations.

```
import { parse, serialize } from 'cookie';
import {
  set,
  get,
  remove,
  getJSON,
  noConflict,
  withConverter,
  CookieAttributes,
  CookiesStatic,
  CookieWriteConverter,
} from 'js-cookie';

export type Cookie = {
  [key: string]: string;
};

export { CookieAttributes, CookiesStatic, CookieWriteConverter };

export const cookieMaker = {
  parse,
  serialize,
  set,
  get,
  remove,
  getJSON,
  noConflict,
  withConverter,
};

export default cookieMaker;
```
