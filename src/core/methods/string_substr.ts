export default {
    in: ['string', 'number', 'number'],
    out: 'string',
    fn: function(string: string, start: number, length: number): string {
        return string.substr(start, length);
    },
    print: function(string: string, start: number, length?: number): string {
        if (length !== undefined)
            return `${JSON.stringify(string)}.substr(${JSON.stringify(start)},${JSON.stringify(length)})`;
        else
            return `${JSON.stringify(string)}.substr(${JSON.stringify(start)})`;
    }
};