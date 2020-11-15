export default {
    in: ['string'],
    out: 'string',
    fn: function(string: string): string {
        return string.trim();
    },
    print: function(string: string): string {
        return `${JSON.stringify(string)}.trim()`;
    }
};