// Object

function merge<U, V>(o: U, o2: V): U & V {
    return {
        ...o,
        ...o2,
    }
}

const r1 = merge({ a: 1 }, { b: 2 });
const r2 = merge({ a: 1, c: 'col' }, { b: 2 });
