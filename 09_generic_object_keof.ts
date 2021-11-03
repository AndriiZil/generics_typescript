function getValue<T extends object, U extends keyof T>(obj: T, prop: U) {
    return obj[prop];
}

const r1 = getValue({
    name: 'Max',
    age: 36
}, 'name') // 'age'

function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
    const key = (Object.keys(obj) as Array<U>).find(key => obj[key] === value);

    return key || null;
}

function getKey3<T extends object>(obj: T, value: T[keyof T]): keyof T | null {
    const key = (Object.keys(obj) as Array<keyof T>).find(key => obj[key] === value);

    return key || null;
}

const key = getKey({
    name: 'Max',
    age: 100
}, 'Max');
