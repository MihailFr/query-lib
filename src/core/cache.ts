type CacheEntry<T = any> = {
  data?: T;
  error?: any;
  status: 'idle' | 'loading' | 'success' | 'error';
  updatedAt: number;
  subscribers: Set<() => void>;
};

class QueryCache {
  private store = new Map<string, CacheEntry>();

  get(key: string) {
    return this.store.get(key);
  }

  set(key: string, entry: Partial<CacheEntry>) {
    const prev = this.store.get(key) || {
      status: 'idle',
      subscribers: new Set(),
      updatedAt: 0,
    };

    const next = { ...prev, ...entry, updatedAt: Date.now() };
    this.store.set(key, next);

    next.subscribers.forEach((cb) => cb());
  }

  subscribe(key: string, cb: () => void) {
  let entry = this.store.get(key);

  if (!entry) {
    entry = { status: 'idle', subscribers: new Set(), updatedAt: 0 };
    this.store.set(key, entry);
  }

  entry.subscribers.add(cb);

  return () => {
    entry!.subscribers.delete(cb);
  };
}

getAll() {
  return this.store;
}
}

export const queryCache = new QueryCache();