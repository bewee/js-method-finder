export default {
    in: ['string', 'string', 'number'],
    out: 'boolean',
    fn: function(string: string, searchString: string, position?: number): boolean {
        return string.includes(searchString, position);
    },
    print: function(string: string, searchString: string, position?: number): string {
        if (position !== undefined)
            return `${JSON.stringify(string)}.includes(${JSON.stringify(searchString)},${JSON.stringify(position)})`;
        else
            return `${JSON.stringify(string)}.includes(${JSON.stringify(searchString)})`;
    },
};