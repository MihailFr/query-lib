import { useDevtoolsStore } from './useDevtoolsStore';

export function Devtools() {
  const { queries } = useDevtoolsStore();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        background: '#111',
        color: '#0f0',
        padding: 10,
        fontSize: 12,
        maxHeight: 300,
        overflow: 'auto'
      }}
    >
      {queries.map((q) => (
        <div key={q.key}>
          {q.key} → {q.status}
        </div>
      ))}
    </div>
  );
}