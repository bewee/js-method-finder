import { stringify } from "../helpers";

export default {
    in: ['string', 'number', '*number'],
    out: 'string',
    fn: function(string: string, beginIndex: number, endIndex: number): string {
        return string.slice(beginIndex, endIndex);
    },
    print: function(string: string, beginIndex: number, endIndex?: number): string {
        if (endIndex !== undefined)
            return `${stringify(string)}.slice(${stringify(beginIndex)},${stringify(endIndex)})`;
        else
            return `${stringify(string)}.slice(${stringify(beginIndex)})`;
    }
};