import { queryCache } from '../core/cache';

export function hydrate(state: any) {
  Object.entries(state).forEach(([key, value]) => {
    queryCache.set(key, value as any);
  });
}