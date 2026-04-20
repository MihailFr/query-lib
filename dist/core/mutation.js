export async function runMutation(fn, onSuccess) {
    const result = await fn();
    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
    return result;
}
