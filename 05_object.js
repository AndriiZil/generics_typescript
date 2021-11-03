"use strict";
// Object
function merge(o, o2) {
    return {
        ...o,
        ...o2,
    };
}
const r1 = merge({ a: 1 }, { b: 2 });
const r2 = merge({ a: 1, c: 'col' }, { b: 2 });
