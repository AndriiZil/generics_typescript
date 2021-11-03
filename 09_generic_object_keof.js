"use strict";
function getValue(obj, prop) {
    return obj[prop];
}
const r1 = getValue({
    name: 'Max',
    age: 36
}, 'name'); // 'age'
function getKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}
const key = getKey({
    name: 'Max'
}, 'Max');
