import { stringify } from "../helpers";

export default {
    in: ['string', 'number', '*string'],
    out: 'string',
    fn: function(string: string, targetLength : number, padString?: string): string {
        return string.padStart(targetLength, padString);
    },
    print: function(string: string, targetLength : number, padString?: string): string {
        if (padString !== undefined)
            return `${stringify(string)}.padStart(${stringify(targetLength )},${stringify(padString)})`;
        else
            return `${stringify(string)}.padStart(${stringify(targetLength )})`;
    }
};