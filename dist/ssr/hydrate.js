import { queryCache } from '../core/cache';
export function hydrate(state) {
    Object.entries(state).forEach(([key, value]) => {
        queryCache.set(key, value);
    });
}
