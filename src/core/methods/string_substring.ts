export default {
    in: ['string', 'number', 'number'],
    out: 'string',
    fn: function(a: string, b: number, c: number): string {
        return a.substring(b, c);
    },
    print: function(a: string, b: number, c?: number): string {
        if (c !== undefined)
            return `${JSON.stringify(a)}.substring(${JSON.stringify(b)},${JSON.stringify(c)})`;
        else
            return `${JSON.stringify(a)}.substring(${JSON.stringify(b)})`;
    }
};