export default {
    in: ['string', 'string', 'number'],
    out: 'number',
    fn: function(string: string, searchValue : string, fromIndex?: number): number {
        return string.lastIndexOf(searchValue , fromIndex);
    },
    print: function(string: string, searchValue : string, fromIndex?: number): string {
        if (fromIndex !== undefined)
            return `${JSON.stringify(string)}.lastIndexOf(${JSON.stringify(searchValue )},${JSON.stringify(fromIndex)})`;
        else
            return `${JSON.stringify(string)}.lastIndexOf(${JSON.stringify(searchValue )})`;
    }
};