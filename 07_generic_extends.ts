// Generic Extends

interface Person {
    phone: number;
}

function callFriend<T extends Person>(friend: T) {}

callFriend({ phone: 6554982654 });

callFriend({ name: 'User' }) // Error Argument type {name: string} is not assignable to parameter type Person

function len<T extends { length: number }>(collection: T) {
    return collection.length;
}

const r1 = len('Hello');
const r2 = len([1, 2, 3]);
const r3 = len(3) // Error
