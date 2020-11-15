export default {
    in: ['string', 'string', 'number'],
    out: 'object',
    fn: function(string: string, separator: string, limit?: number): string[] {
        console.log(string, separator, limit, string.split(separator, limit));
        return string.split(separator, limit);
    },
    print: function(string: string, separator: string, limit?: number): string {
        if (limit !== undefined)
            return `${JSON.stringify(string)}.split(${JSON.stringify(separator)},${JSON.stringify(limit)})`;
        else
            return `${JSON.stringify(string)}.split(${JSON.stringify(separator)})`;
    }
};