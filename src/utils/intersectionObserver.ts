export function createObserver(cb: () => void) {
  return new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) cb();
  });
}