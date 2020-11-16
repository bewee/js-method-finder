export function stringify(a: any) {
    if (typeof a === 'object' || typeof a === 'string') return JSON.stringify(a);
    try {
        return a.toString();
    } catch(ex) {
        if (a === undefined) return 'undefined';
        return 'unknown';
    }
}