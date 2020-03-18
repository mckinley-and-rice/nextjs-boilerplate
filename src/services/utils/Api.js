import axios from 'axios';
import envConfig from '../../config/env-config';
import { setupCache } from 'axios-cache-adapter';
import cookies from 'js-cookie';

let apiUrl;
if (process.browser) {
  // in client side, we don't have dotEnv config, so we have to set apiUrl
  // in window object and get it here
  apiUrl = window.apiUrl;
} else {
  apiUrl = envConfig.app.apiUrl;
}

// Create `axios-cache-adapter` instance
const cache = setupCache({ maxAge: 5 * 60 * 100, exclude: { query: false } });
const noCache = setupCache({ maxAge: 0 });

export const getToken = (ctx) => {
  let token = null;

  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    // we dont have request info aka Client Side
    token = cookies.get('token')
  }
  return token;
}

export const saveToken = (token) => {
  cookies.set('token', token)
}

/**
 * Use as import Api from './Utils'
 * Api().get / Api().post / Api().put etc...
 * @param ctx {object} parameter from getInitialProps()
 * @param disableCache {boolean} true if caching is needed
 */
export default (ctx, disableCache = true) => {
  const token = getToken(ctx);
  return axios.create({
    baseURL: apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {'Authorization': token})
    },
    timeout: 9000,
    adapter: disableCache ? noCache.adapter : cache.adapter
  });
};
