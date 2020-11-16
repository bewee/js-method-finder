import { stringify } from "../helpers";

export default {
    in: ['string', 'string', 'string'],
    out: 'string',
    fn: function(string: string, substr: string, newSubstr: string): string {
        return string.split(substr).join(newSubstr);
    },
    print: function(string: string, substr: string, newSubstr: string): string {
        return `${stringify(string)}.replaceAll(${stringify(substr)},${stringify(newSubstr)})`;
    }
};