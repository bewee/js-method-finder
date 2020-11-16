import { stringify } from "../helpers";

export default {
    in: ['string', 'number', '*number'],
    out: 'string',
    fn: function(string: string, start: number, length: number): string {
        return string.substr(start, length);
    },
    print: function(string: string, start: number, length?: number): string {
        if (length !== undefined)
            return `${stringify(string)}.substr(${stringify(start)},${stringify(length)})`;
        else
            return `${stringify(string)}.substr(${stringify(start)})`;
    }
};