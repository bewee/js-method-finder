export default {
    in: ['string', '*string'],
    out: 'string',
    fn: function(string: string, form: string): string {
        return string.normalize(form);
    },
    print: function(string: string, form: string): string {
        if (form !== undefined)
            return `${JSON.stringify(string)}.normalize(${JSON.stringify(form)})`;
        else
            return `${JSON.stringify(string)}.normalize()`;
    }
};