import { stringify } from "../helpers";

export default {
    in: ['string', 'string', '*number'],
    out: 'boolean',
    fn: function(string: string, searchString: string, position?: number): boolean {
        return string.includes(searchString, position);
    },
    print: function(string: string, searchString: string, position?: number): string {
        if (position !== undefined)
            return `${stringify(string)}.includes(${stringify(searchString)},${stringify(position)})`;
        else
            return `${stringify(string)}.includes(${stringify(searchString)})`;
    },
};