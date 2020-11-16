import { stringify } from "../helpers";

export default {
    in: ['string', 'string', '*number'],
    out: 'boolean',
    fn: function(string: string, searchString: string, length?: number): boolean {
        return string.startsWith(searchString, length);
    },
    print: function(string: string, searchString: string, length?: number): string {
        if (length !== undefined)
            return `${stringify(string)}.startsWith(${stringify(searchString)},${stringify(length)})`;
        else
            return `${stringify(string)}.startsWith(${stringify(searchString)})`;
    }
};