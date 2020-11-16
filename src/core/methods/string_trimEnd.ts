import { stringify } from "../helpers";

export default {
    in: ['string'],
    out: 'string',
    fn: function(string: string): string {
        return string.trimEnd();
    },
    print: function(string: string): string {
        return `${stringify(string)}.trimEnd()`;
    }
};