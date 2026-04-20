import { useEffect, useState } from 'react';
import { fetchQuery } from '../core/query';
import { queryCache } from '../core/cache';

export function useQuery<T>(
  key: string,
  fn: () => Promise<T>,
  options?: { staleTime?: number }
) {
  const [, force] = useState(0);

  useEffect(() => {
    return queryCache.subscribe(key, () => force((x) => x + 1));
  }, [key]);

  const cache = queryCache.get(key);

  useEffect(() => {
    if (!cache || cache.status === 'idle') {
      fetchQuery(key, fn, options);
    }
  }, [key]);

  return cache || { status: 'loading' };
}