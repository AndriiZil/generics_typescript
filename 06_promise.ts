// Promise

async function fakeRequest() {
    return 2;
}

const b: Promise<number> = fakeRequest();

type Names1 = string[];
type Names2 = Array<string>;

type Obj = {
    [key: string]: number;
}

// The same as
type Obj2 = Record<string, number>;

