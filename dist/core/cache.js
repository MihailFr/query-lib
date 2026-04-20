class QueryCache {
    constructor() {
        this.store = new Map();
    }
    get(key) {
        return this.store.get(key);
    }
    set(key, entry) {
        const prev = this.store.get(key) || {
            status: 'idle',
            subscribers: new Set(),
            updatedAt: 0,
        };
        const next = { ...prev, ...entry, updatedAt: Date.now() };
        this.store.set(key, next);
        next.subscribers.forEach((cb) => cb());
    }
    subscribe(key, cb) {
        let entry = this.store.get(key);
        if (!entry) {
            entry = { status: 'idle', subscribers: new Set(), updatedAt: 0 };
            this.store.set(key, entry);
        }
        entry.subscribers.add(cb);
        return () => {
            entry.subscribers.delete(cb);
        };
    }
    getAll() {
        return this.store;
    }
}
export const queryCache = new QueryCache();
