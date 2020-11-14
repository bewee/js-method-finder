export default {
    in: ['string', 'string'],
    out: 'boolean',
    fn: function(a: string, b: string): boolean {
        return a.startsWith(b);
    },
    print: function(a: string, b: string): string {
        return `${JSON.stringify(a)}.startsWith(${JSON.stringify(b)})`;
    }
};