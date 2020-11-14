export default {
    in: ['any', 'any'],
    out: 'boolean',
    fn: function(a: any, b: any): boolean {
        return a !== b;
    },
    print: function(a: any, b: any): string {
        return `${JSON.stringify(a)}!==${JSON.stringify(b)}`;
    }
};