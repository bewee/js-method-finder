export default {
    in: ['string', 'number', 'string'],
    out: 'string',
    fn: function(string: string, targetLength : number, padString?: string): string {
        return string.padEnd(targetLength, padString);
    },
    print: function(string: string, targetLength : number, padString?: string): string {
        if (padString !== undefined)
            return `${JSON.stringify(string)}.padEnd(${JSON.stringify(targetLength )},${JSON.stringify(padString)})`;
        else
            return `${JSON.stringify(string)}.padEnd(${JSON.stringify(targetLength )})`;
    }
};