const a: number = 10;
const b: string = 'string';

function identity<T>(arg: T) {
    return arg;
}

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: 'Max',
    age: 27,
}

const r1 = identity(a);
const r2 = identity(b);
const r3 = identity(user)
