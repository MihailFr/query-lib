export type InfiniteQueryOptions<T> = {
    queryFn: (page: number) => Promise<T>;
};
export declare function fetchInfiniteQuery<T>(page: number, options: InfiniteQueryOptions<T>): Promise<T>;
