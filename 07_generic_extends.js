"use strict";
// Generic Extends
function callFriend(friend) { }
callFriend({ phone: 6554982654 });
callFriend({ name: 'User' }); // Error Argument type {name: string} is not assignable to parameter type Person
function len(collection) {
    return collection.length;
}
const r1 = len('Hello');
const r2 = len([1, 2, 3]);
const r3 = len(3); // Error
