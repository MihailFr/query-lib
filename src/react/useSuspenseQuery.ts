export function useSuspenseQuery(promise: Promise<any>) {
  if (!promise) throw new Error('No promise');
  throw promise;
}