export default {
    in: ['string', 'string', 'string'],
    out: 'string',
    fn: function(string: string, substr: string, newSubstr: string): string {
        return string.replace(substr, newSubstr);
    },
    print: function(string: string, substr: string, newSubstr: string): string {
        return `${JSON.stringify(string)}.replace(${JSON.stringify(substr)},${JSON.stringify(newSubstr)})`;
    }
};