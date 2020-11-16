import { stringify } from "../helpers";

export default {
    in: ['string', 'string', '*number'],
    out: 'object',
    fn: function(string: string, separator: string, limit?: number): string[] {
        console.log(string, separator, limit, string.split(separator, limit));
        return string.split(separator, limit);
    },
    print: function(string: string, separator: string, limit?: number): string {
        if (limit !== undefined)
            return `${stringify(string)}.split(${stringify(separator)},${stringify(limit)})`;
        else
            return `${stringify(string)}.split(${stringify(separator)})`;
    }
};