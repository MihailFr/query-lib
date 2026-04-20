type CacheEntry<T = any> = {
    data?: T;
    error?: any;
    status: 'idle' | 'loading' | 'success' | 'error';
    updatedAt: number;
    subscribers: Set<() => void>;
};
declare class QueryCache {
    private store;
    get(key: string): CacheEntry<any> | undefined;
    set(key: string, entry: Partial<CacheEntry>): void;
    subscribe(key: string, cb: () => void): () => void;
    getAll(): Map<string, CacheEntry<any>>;
}
export declare const queryCache: QueryCache;
export {};
