import { queryCache } from './cache';
export function connectWS(url) {
    const ws = new WebSocket(url);
    ws.onmessage = (e) => {
        const { key, data } = JSON.parse(e.data);
        queryCache.set(key, { data });
    };
    return ws;
}
