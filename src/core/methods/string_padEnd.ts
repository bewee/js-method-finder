import { stringify } from "../helpers";

export default {
    in: ['string', 'number', '*string'],
    out: 'string',
    fn: function(string: string, targetLength : number, padString?: string): string {
        return string.padEnd(targetLength, padString);
    },
    print: function(string: string, targetLength : number, padString?: string): string {
        if (padString !== undefined)
            return `${stringify(string)}.padEnd(${stringify(targetLength )},${stringify(padString)})`;
        else
            return `${stringify(string)}.padEnd(${stringify(targetLength )})`;
    }
};