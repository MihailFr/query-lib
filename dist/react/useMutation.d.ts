export declare function useMutation(fn: () => Promise<any>): {
    mutate: () => Promise<void>;
    loading: boolean;
};
