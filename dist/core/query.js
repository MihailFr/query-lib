import { queryCache } from './cache';
export async function fetchQuery(key, fn, options) {
    const cache = queryCache.get(key);
    if (cache && Date.now() - cache.updatedAt < (options?.staleTime || 0)) {
        return cache.data;
    }
    queryCache.set(key, { status: 'loading' });
    try {
        const data = await fn();
        queryCache.set(key, { data, status: 'success' });
        return data;
    }
    catch (error) {
        queryCache.set(key, { error, status: 'error' });
        throw error;
    }
}
