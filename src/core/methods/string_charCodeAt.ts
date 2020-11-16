import { stringify } from "../helpers";

export default {
    in: ['string', 'number'],
    out: 'number',
    fn: function(string: string, pos: number): number {
        return string.charCodeAt(pos);
    },
    print: function(string: string, pos: number): string {
        return `${stringify(string)}.charCodeAt(${stringify(pos)})`;
    }
};