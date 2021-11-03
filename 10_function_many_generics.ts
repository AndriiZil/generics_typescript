// Generics

function patchField<
    T extends object,
    U extends keyof T,
    V extends T[U]
>(obj: T, field: U, val: V) {
    
}

patchField({ f: 1 }, 'f', 3);
