import { useState } from 'react';
import { runMutation } from '../core/mutation';
export function useMutation(fn) {
    const [loading, setLoading] = useState(false);
    const mutate = async () => {
        setLoading(true);
        await runMutation(fn);
        setLoading(false);
    };
    return { mutate, loading };
}
