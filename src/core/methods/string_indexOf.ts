import { stringify } from "../helpers";

export default {
    in: ['string', 'string', '*number'],
    out: 'number',
    fn: function(string: string, searchValue : string, fromIndex?: number): number {
        return string.indexOf(searchValue , fromIndex);
    },
    print: function(string: string, searchValue : string, fromIndex?: number): string {
        if (fromIndex !== undefined)
            return `${stringify(string)}.indexOf(${stringify(searchValue )},${stringify(fromIndex)})`;
        else
            return `${stringify(string)}.indexOf(${stringify(searchValue )})`;
    }
};