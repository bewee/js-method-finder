export default {
    in: ['object', 'function'],
    out: 'boolean',
    fn: function(a: any[], b: (value: any, index: number, array: any[]) => value is any): boolean {
        return a.every(b);
    },
    print: function(a: any[], b: (value: any, index: number, array: any[]) => value is any): string {
        return `${JSON.stringify(a)}.every(${b})`;
    }
};