export default {
    in: ['string', 'number'],
    out: 'string',
    fn: function(string: string, pos: number): string {
        return string.charAt(pos);
    },
    print: function(string: string, pos: number): string {
        return `${JSON.stringify(string)}.charAt(${JSON.stringify(pos)})`;
    }
};