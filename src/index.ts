import { parse, serialize } from 'cookie';
import { set, get, remove, getJSON, noConflict, withConverter } from 'js-cookie';

export type Cookie = {
  [key: string]: string;
};

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
