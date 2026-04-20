export function createObserver(cb) {
    return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting)
            cb();
    });
}
