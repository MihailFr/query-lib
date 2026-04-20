export declare function fetchQuery<T>(key: string, fn: () => Promise<T>, options?: {
    staleTime?: number;
}): Promise<any>;
