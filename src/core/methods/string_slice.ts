export default {
    in: ['string', 'number', '*number'],
    out: 'string',
    fn: function(string: string, beginIndex: number, endIndex: number): string {
        return string.slice(beginIndex, endIndex);
    },
    print: function(string: string, beginIndex: number, endIndex?: number): string {
        if (endIndex !== undefined)
            return `${JSON.stringify(string)}.slice(${JSON.stringify(beginIndex)},${JSON.stringify(endIndex)})`;
        else
            return `${JSON.stringify(string)}.slice(${JSON.stringify(beginIndex)})`;
    }
};