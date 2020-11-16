import { stringify } from "../helpers";

export default {
    in: ['any', 'any'],
    out: 'any',
    fn: function(a: any, b: any): any {
        return a - b;
    },
    print: function(a: any, b: any): string {
        return `${stringify(a)}-${stringify(b)}`;
    }
};