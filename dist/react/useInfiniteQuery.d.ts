export declare function useInfiniteQuery(fn: (page: number) => Promise<any>): {
    data: any[];
    fetchNext: () => Promise<void>;
};
