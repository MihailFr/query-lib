export type InfiniteQueryOptions<T> = {
  queryFn: (page: number) => Promise<T>;
};

export async function fetchInfiniteQuery<T>(
  page: number,
  options: InfiniteQueryOptions<T>
): Promise<T> {
  return options.queryFn(page);
}