export interface Method {
    in: string[],
    out: string,
    fn: Function,
    print: Function,
}
export interface MethodResult {
    priority: number,
    method: Method,
    input: any[]
}

const methods: {[key: string]: Method} = require('./methods').default;

function deepEqual(x: any, y: any) {
    if (x === y) return true;
    if (!(x instanceof Object) || !(y instanceof Object)) return false;
    if (x.constructor !== y.constructor) return false;
  
    for (const p in x) {
        if (!x.hasOwnProperty(p)) continue;
        if (!y.hasOwnProperty(p)) return false;
        if (x[p] === y[p]) continue;
        if (typeof(x[p]) !== "object") return false;
        if (!deepEqual(x[p], y[p])) return false;
    }
  
    for (const p in y)
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
            return false;
  
    return true;
}

function entryCountListsMatch(x: {[key: string]: number}, y: {[key: string]: number}) {
    const xx = Object.assign({}, {undefined: 0, null: 0, boolean: 0, number: 0, bigint: 0, string: 0, symbol: 0, function: 0, object: 0, any: 0}, x);
    const yy = Object.assign({}, {undefined: 0, null: 0, boolean: 0, number: 0, bigint: 0, string: 0, symbol: 0, function: 0, object: 0, any: 0}, y);
    let diff = 0;
    if (yy.undefined >= xx.undefined) diff += yy.undefined - xx.undefined;
    else return false;
    if (yy.null >= xx.null) diff += yy.null - xx.null;
    else return false;
    if (yy.boolean >= xx.boolean) diff += yy.boolean - xx.boolean;
    else return false;
    if (yy.number >= xx.number) diff += yy.number - xx.number;
    else return false;
    if (yy.bigint >= xx.bigint) diff += yy.bigint - xx.bigint;
    else return false;
    if (yy.string >= xx.string) diff += yy.string - xx.string;
    else return false;
    if (yy.symbol >= xx.symbol) diff += yy.symbol - xx.symbol;
    else return false;
    if (yy.function >= xx.function) diff += yy.function - xx.function;
    else return false;
    if (yy.object >= xx.object) diff += yy.object - xx.object;
    else return false;
    return diff === xx.any;
}

function entryCountList (a: string[]) {
    return a.reduce((acc: {[key: string]: number}, cur: string) => {
        if (cur in acc)
            acc[cur]++;
        else
            acc[cur] = 1;
        return acc;
    }, {});
}

function forEachValidAllocation(input: any[], types: string[], cb: (allocation: any[], deviation: number)=>void) {
    const length = input.length;
    if (length !== types.length) {
        return;
    }
    const la = entryCountList(types);
    const lb = entryCountList(input.map((i: any) => typeof i));
    if (!entryCountListsMatch(la, lb)) {
        return;
    }
    const placeholder = {};
    const allocation = Array(length).fill(placeholder);
    function allocate(i: number, cb: (allocation: any[])=>void) {
        if (i >= length) {
            cb(allocation);
            return;
        }
        for (let pos = 0; pos < length; pos++) {
            if ((types[pos] === 'any' || typeof input[i] === types[pos]) && allocation[pos] === placeholder) {
                allocation[pos] = input[i];
                allocate(i+1, cb);
                allocation[pos] = placeholder;
            }
        }
    }
    let num_its = 0;
    allocate(0, (_allocation: any[]) => {
        num_its++;
    });
    let it = 0;
    allocate(0, (allocation: any[]) => {
        cb(allocation, it/(num_its+1));
        it++;
    });
}

export function findMethods(input: any[], output: any): MethodResult[] {
    const list: MethodResult[] = [];
    for (const m in methods) {
        const method = methods[m];
        if ((method.out === 'any' || method.out === typeof output) && method.in.length >= input.length) {
            const method_in = method.in.slice(0, input.length);
            forEachValidAllocation(input, method_in, (allocation: any[], deviation) => {
                try {
                    const result = method.fn(...allocation);
                    const addResult = function(priority: number, method: Method) {
                        list.push({
                            priority: priority+deviation, 
                            method: method, 
                            input: [...allocation]
                        });
                    };
                    const makeMethodWrapper = function(fn: Function, print: string) {
                        return {
                            in: method_in, 
                            out: method.out, 
                            fn: (...args: any) => fn(method.fn(...args)), 
                            print: (...args: any) => print.replace(/x/g, method.print(...args)),
                        };
                    };
                    if (deepEqual(result, output)) {
                        addResult(1, method);
                    } else {
                        switch (typeof output) {
                            case 'boolean':
                                addResult(2, makeMethodWrapper((x: boolean)=>!x, '!(x)'));
                                break;
                            case 'number':
                                if (isNaN(result)) break;
                                const diff = output-(result as number);
                                if (diff > 0) {
                                    addResult(diff === 1 ? 2 : 3, makeMethodWrapper((x: number)=>x+diff, `x+${diff}`));
                                } else {
                                    const d = -diff;
                                    addResult(d === 1 ? 2 : 3, makeMethodWrapper((x: number)=>x-d, `x-${d}`));
                                }
                                break;
                        }
                    }
                } catch (ex) {
                }
            });
        }
    }
    list.sort((a: MethodResult, b: MethodResult) => a.priority-b.priority);
    return list;
}