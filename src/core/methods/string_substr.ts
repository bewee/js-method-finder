export default {
    in: ['string', 'number', 'number'],
    out: 'string',
    fn: function(a: string, b: number, c: number): string {
        return a.substr(b, c);
    },
    print: function(a: string, b: number, c?: number): string {
        if (c !== undefined)
            return `${JSON.stringify(a)}.substr(${JSON.stringify(b)},${JSON.stringify(c)})`;
        else
            return `${JSON.stringify(a)}.substr(${JSON.stringify(b)})`;
    }
};