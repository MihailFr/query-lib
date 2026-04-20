export declare function useQuery<T>(key: string, fn: () => Promise<T>, options?: {
    staleTime?: number;
}): {
    data?: any;
    error?: any;
    status: "idle" | "loading" | "success" | "error";
    updatedAt: number;
    subscribers: Set<() => void>;
} | {
    status: "loading";
};
