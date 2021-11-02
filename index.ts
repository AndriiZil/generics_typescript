export interface User {
    name: string;
    age: number;
}

export interface Message {
    id: number;
    text: string;
}

interface State<T, U, V, K> {}

type State2<T> = {};

class State3<T> {}

function State4<T>() {}

interface UserState {
    loading: boolean;
    error: Error | null;
    data: User;
}

interface MessageState {
    loading: boolean;
    error: Error | null;
    data: Message;
}
