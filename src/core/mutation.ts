import { queryCache } from './cache';

export async function runMutation<T>(
  fn: () => Promise<T>,
  onSuccess?: () => void
) {
  const result = await fn();
  onSuccess?.();
  return result;
}