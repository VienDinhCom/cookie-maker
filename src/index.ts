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
