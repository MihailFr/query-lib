type DevtoolsState = {
    queries: {
        key: string;
        status: string;
        updatedAt: number;
    }[];
};
export declare function useDevtoolsStore(): DevtoolsState;
export {};
