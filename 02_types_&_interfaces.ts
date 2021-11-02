import { Message } from './index';

interface State<T> {
    loading: boolean;
    error: Error | null;
    data: T;
}

type messageState = State<Message>;

type userState = State<User>;

const messageState: messageState = {
    loading: true,
    error: null,
    data: {
        id: 1,
        text: 'simple'
    }
}
