export default {
    in: ['string', 'string', 'string', 'object'],
    out: 'number',
    fn: function(string: string, compareString : string, locales?: string, options?: {}): number {
        return string.localeCompare(compareString, locales, options);
    },
    print: function(string: string, compareString : string, locales?: string, options?: {}): string {
        if (options !== undefined)
            return `${JSON.stringify(string)}.localeCompare(${JSON.stringify(compareString )},${JSON.stringify(locales)},${JSON.stringify(options)})`;
        else if (locales !== undefined)
            return `${JSON.stringify(string)}.localeCompare(${JSON.stringify(compareString )},${JSON.stringify(locales)})`;
        else
            return `${JSON.stringify(string)}.localeCompare(${JSON.stringify(compareString )})`;
    }
};