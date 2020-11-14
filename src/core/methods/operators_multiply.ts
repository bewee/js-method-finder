export default {
    in: ['any', 'any'],
    out: 'any',
    fn: function(a: any, b: any): any {
        return a * b;
    },
    print: function(a: any, b: any): string {
        return `${JSON.stringify(a)}*${JSON.stringify(b)}`;
    }
};