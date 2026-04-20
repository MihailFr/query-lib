export function useSuspenseQuery(promise) {
    if (!promise)
        throw new Error('No promise');
    throw promise;
}
