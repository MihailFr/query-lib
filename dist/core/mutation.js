export async function runMutation(fn, onSuccess) {
    const result = await fn();
    onSuccess?.();
    return result;
}
