export default {
    in: ['string', 'string'],
    out: 'boolean',
    fn: function(a: string, b: string): boolean {
        return a.endsWith(b);
    },
    print: function(a: string, b: string): string {
        return `${JSON.stringify(a)}.endsWith(${JSON.stringify(b)})`;
    }
};