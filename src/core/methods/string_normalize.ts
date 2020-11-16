import { stringify } from "../helpers";

export default {
    in: ['string', '*string'],
    out: 'string',
    fn: function(string: string, form: string): string {
        return string.normalize(form);
    },
    print: function(string: string, form: string): string {
        if (form !== undefined)
            return `${stringify(string)}.normalize(${stringify(form)})`;
        else
            return `${stringify(string)}.normalize()`;
    }
};