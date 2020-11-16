import { stringify } from "../helpers";

export default {
    in: ['string', 'number'],
    out: 'number',
    fn: function(string: string, pos: number): (number|undefined) {
        return string.codePointAt(pos);
    },
    print: function(string: string, pos: number): string {
        return `${stringify(string)}.codePointAt(${stringify(pos)})`;
    }
};