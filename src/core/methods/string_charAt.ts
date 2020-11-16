import { stringify } from "../helpers";

export default {
    in: ['string', 'number'],
    out: 'string',
    fn: function(string: string, pos: number): string {
        return string.charAt(pos);
    },
    print: function(string: string, pos: number): string {
        return `${stringify(string)}.charAt(${stringify(pos)})`;
    }
};