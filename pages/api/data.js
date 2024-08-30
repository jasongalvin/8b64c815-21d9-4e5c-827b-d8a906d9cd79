import { getCache, setCache } from '../../../utils/cache';
// Example API with caching
export default async function handler(req, res) {
  const cacheKey = 'some_data';
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return res.status(200).json(cachedData);
  } else {
    const freshData = await fetchDataFromSource(); // Assume this function fetches data
    setCache(cacheKey, freshData);
    return res.status(200).json(freshData);
  }
}