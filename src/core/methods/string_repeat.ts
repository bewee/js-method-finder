import { stringify } from "../helpers";

export default {
    in: ['string', 'number'],
    out: 'string',
    fn: function(string: string, count : number): string {
        return string.repeat(count);
    },
    print: function(string: string, count : number): string {
        return `${stringify(string)}.repeat(${stringify(count)})`;
    }
};