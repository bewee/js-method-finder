export default {
    in: ['string', 'string', '*number'],
    out: 'number',
    fn: function(string: string, searchValue : string, fromIndex?: number): number {
        return string.indexOf(searchValue , fromIndex);
    },
    print: function(string: string, searchValue : string, fromIndex?: number): string {
        if (fromIndex !== undefined)
            return `${JSON.stringify(string)}.indexOf(${JSON.stringify(searchValue )},${JSON.stringify(fromIndex)})`;
        else
            return `${JSON.stringify(string)}.indexOf(${JSON.stringify(searchValue )})`;
    }
};