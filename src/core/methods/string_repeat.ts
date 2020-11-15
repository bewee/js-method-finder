export default {
    in: ['string', 'number'],
    out: 'string',
    fn: function(string: string, count : number): string {
        return string.repeat(count);
    },
    print: function(string: string, count : number): string {
        return `${JSON.stringify(string)}.repeat(${JSON.stringify(count)})`;
    }
};