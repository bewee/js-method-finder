export default {
    in: ['string', 'string'],
    out: 'boolean',
    fn: function(a: string, b: string): boolean {
        return a.includes(b);
    },
    print: function(a: string, b: string): string {
        return `${JSON.stringify(a)}.includes(${JSON.stringify(b)})`;
    }
};