import { stringify } from "../helpers";

export default {
    in: ['string', 'string', 'string'],
    out: 'string',
    fn: function(string: string, substr: string, newSubstr: string): string {
        return string.replace(substr, newSubstr);
    },
    print: function(string: string, substr: string, newSubstr: string): string {
        return `${stringify(string)}.replace(${stringify(substr)},${stringify(newSubstr)})`;
    }
};