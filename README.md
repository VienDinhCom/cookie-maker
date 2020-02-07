# cookie-meta

This is a meta-package of [cookie](https://www.npmjs.com/package/cookie) and [js-cookie](https://www.npmjs.com/package/js-cookie) with TypeScript support.

Please go to [cookie](https://www.npmjs.com/package/cookie) and [js-cookie](https://www.npmjs.com/package/js-cookie) for documentations.

```
import UniversalCookie from 'cookie';
import BrowserCookie from 'js-cookie';

export const Cookie = {
  parse: UniversalCookie.parse,
  serialize: UniversalCookie.serialize,
  set: BrowserCookie.set,
  get: BrowserCookie.get,
  remove: BrowserCookie.remove,
  getJSON: BrowserCookie.getJSON,
  noConflict: BrowserCookie.noConflict,
  withConverter: BrowserCookie.withConverter,
};
```
