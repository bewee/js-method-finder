export default {
    in: ['string'],
    out: 'number',
    fn: function(a: string): number {
        return a.length;
    },
    print: function(a: string): string {
        return `${JSON.stringify(a)}.length`;
    }
};