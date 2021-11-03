"use strict";
// Generics in TypeScript
function getRandomElement(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
const el1 = getRandomElement([1, 2, 3, 4, 5]); // number
const el2 = getRandomElement(['a', 'b', 'c']); // string
const el3 = getRandomElement(['a', 'b', 'c', 1, null]); //  string | number | null
