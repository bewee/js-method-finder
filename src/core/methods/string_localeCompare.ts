import { stringify } from "../helpers";

export default {
    in: ['string', 'string', '*string', '*object'],
    out: 'number',
    fn: function(string: string, compareString : string, locales?: string, options?: {}): number {
        return string.localeCompare(compareString, locales, options);
    },
    print: function(string: string, compareString : string, locales?: string, options?: {}): string {
        if (options !== undefined)
            return `${stringify(string)}.localeCompare(${stringify(compareString )},${stringify(locales)},${stringify(options)})`;
        else if (locales !== undefined)
            return `${stringify(string)}.localeCompare(${stringify(compareString )},${stringify(locales)})`;
        else
            return `${stringify(string)}.localeCompare(${stringify(compareString )})`;
    }
};