import { useSyncExternalStore } from 'react';
import { queryCache } from '../core/cache';
function subscribe(callback) {
    // підписуємось на всі ключі
    const unsubscribers = [];
    queryCache.store.forEach((_, key) => {
        const unsub = queryCache.subscribe(key, callback);
        unsubscribers.push(unsub);
    });
    return () => unsubscribers.forEach((u) => u());
}
function getSnapshot() {
    const queries = Array.from(queryCache.store.entries()).map(([key, value]) => ({
        key,
        status: value.status,
        updatedAt: value.updatedAt,
    }));
    return { queries };
}
export function useDevtoolsStore() {
    return useSyncExternalStore(subscribe, getSnapshot);
}
