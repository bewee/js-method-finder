export default {
    in: ['string', 'number'],
    out: 'number',
    fn: function(string: string, pos: number): number {
        return string.charCodeAt(pos);
    },
    print: function(string: string, pos: number): string {
        return `${JSON.stringify(string)}.charCodeAt(${JSON.stringify(pos)})`;
    }
};