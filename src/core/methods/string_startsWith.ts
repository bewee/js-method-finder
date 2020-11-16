export default {
    in: ['string', 'string', '*number'],
    out: 'boolean',
    fn: function(string: string, searchString: string, length?: number): boolean {
        return string.startsWith(searchString, length);
    },
    print: function(string: string, searchString: string, length?: number): string {
        if (length !== undefined)
            return `${JSON.stringify(string)}.startsWith(${JSON.stringify(searchString)},${JSON.stringify(length)})`;
        else
            return `${JSON.stringify(string)}.startsWith(${JSON.stringify(searchString)})`;
    }
};