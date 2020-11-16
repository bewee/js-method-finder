export default {
    in: ['string', 'number', '*number'],
    out: 'string',
    fn: function(string: string, indexStart: number, indexEnd: number): string {
        return string.substring(indexStart, indexEnd);
    },
    print: function(string: string, indexStart: number, indexEnd?: number): string {
        if (indexEnd !== undefined)
            return `${JSON.stringify(string)}.substring(${JSON.stringify(indexStart)},${JSON.stringify(indexEnd)})`;
        else
            return `${JSON.stringify(string)}.substring(${JSON.stringify(indexStart)})`;
    }
};