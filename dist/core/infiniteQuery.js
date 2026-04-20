export async function fetchInfiniteQuery(page, options) {
    return options.queryFn(page);
}
