"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 10;
const b = 'string';
function identity(arg) {
    return arg;
}
const user = {
    name: 'Max',
    age: 27,
};
const r1 = identity(a);
const r2 = identity(b);
const r3 = identity(user);
