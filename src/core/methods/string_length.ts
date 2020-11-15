export default {
    in: ['string'],
    out: 'number',
    fn: function(string: string): number {
        return string.length;
    },
    print: function(string: string): string {
        return `${JSON.stringify(string)}.length`;
    }
};