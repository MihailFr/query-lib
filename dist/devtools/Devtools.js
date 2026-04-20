import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useDevtoolsStore } from './useDevtoolsStore';
export function Devtools() {
    const { queries } = useDevtoolsStore();
    return (_jsx("div", { style: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            background: '#111',
            color: '#0f0',
            padding: 10,
            fontSize: 12,
            maxHeight: 300,
            overflow: 'auto'
        }, children: queries.map((q) => (_jsxs("div", { children: [q.key, " \u2192 ", q.status] }, q.key))) }));
}
