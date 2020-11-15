export default {
    in: ['string', 'string', 'string'],
    out: 'string',
    fn: function(string: string, substr: string, newSubstr: string): string {
        return string.split(substr).join(newSubstr);
    },
    print: function(string: string, substr: string, newSubstr: string): string {
        return `${JSON.stringify(string)}.replaceAll(${JSON.stringify(substr)},${JSON.stringify(newSubstr)})`;
    }
};