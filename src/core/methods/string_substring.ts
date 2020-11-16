import { stringify } from "../helpers";

export default {
    in: ['string', 'number', '*number'],
    out: 'string',
    fn: function(string: string, indexStart: number, indexEnd: number): string {
        return string.substring(indexStart, indexEnd);
    },
    print: function(string: string, indexStart: number, indexEnd?: number): string {
        if (indexEnd !== undefined)
            return `${stringify(string)}.substring(${stringify(indexStart)},${stringify(indexEnd)})`;
        else
            return `${stringify(string)}.substring(${stringify(indexStart)})`;
    }
};