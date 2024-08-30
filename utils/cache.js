import NodeCache from 'node-cache';
const cache = new NodeCache();
export const setCache = (key, value) => {
  cache.set(key, value, 3600); // cache for 1 hour
};
export const getCache = (key) => {
  return cache.get(key);
};