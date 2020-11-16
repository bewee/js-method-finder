import { stringify } from "../helpers";

export default {
    in: ['string', '*any'],
    out: 'string',
    fn: function(string: string, locale : any): string {
        return string.toLocaleLowerCase(locale);
    },
    print: function(string: string, locale : any): string {
        if (locale !== undefined)
            return `${stringify(string)}.toLocaleLowerCase(${stringify(locale)})`;
        else
            return `${stringify(string)}.toLocaleLowerCase()`;
    }
};