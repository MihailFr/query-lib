import { useState } from 'react';

export function useInfiniteQuery(fn: (page: number) => Promise<any>) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any[]>([]);

  const fetchNext = async () => {
    const res = await fn(page);
    setData((prev) => [...prev, res]);
    setPage((p) => p + 1);
  };

  return { data, fetchNext };
}