export default {
    in: ['string', 'number'],
    out: 'number',
    fn: function(string: string, pos: number): (number|undefined) {
        return string.codePointAt(pos);
    },
    print: function(string: string, pos: number): string {
        return `${JSON.stringify(string)}.codePointAt(${JSON.stringify(pos)})`;
    }
};