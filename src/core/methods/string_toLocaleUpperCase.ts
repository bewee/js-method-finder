export default {
    in: ['string', 'any'],
    out: 'string',
    fn: function(string: string, locale : any): string {
        return string.toLocaleUpperCase(locale);
    },
    print: function(string: string, locale : any): string {
        if (locale !== undefined)
            return `${JSON.stringify(string)}.toLocaleUpperCase(${JSON.stringify(locale)})`;
        else
            return `${JSON.stringify(string)}.toLocaleUpperCase()`;
    }
};