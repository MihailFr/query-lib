import { useSyncExternalStore } from 'react';
import { queryCache } from '../core/cache';

type DevtoolsState = {
  queries: {
    key: string;
    status: string;
    updatedAt: number;
  }[];
};

function subscribe(callback: () => void) {
  // підписуємось на всі ключі
  const unsubscribers: (() => void)[] = [];

  (queryCache as any).store.forEach((_: any, key: string) => {
    const unsub = queryCache.subscribe(key, callback);
    unsubscribers.push(unsub);
  });

  return () => unsubscribers.forEach((u) => u());
}

function getSnapshot(): DevtoolsState {
  const queries = Array.from((queryCache as any).store.entries()).map(
    ([key, value]: any) => ({
      key,
      status: value.status,
      updatedAt: value.updatedAt,
    })
  );

  return { queries };
}

export function useDevtoolsStore() {
  return useSyncExternalStore(subscribe, getSnapshot);
}