class DataCollection<T extends { id: string }> {
    constructor(public data: T[]) {}

    search(id: string): T | null {
        return this.data.find(d => d.id === id) || null;
    }
}

type User = {
    id: string;
    name: string;
}

type Message = {
    id: string;
    text: string;
}

const user: User = {
    id: '1',
    name: 'Max'
}

const users = new DataCollection([user]);

const message: Message = {
    id: '2',
    text: 'Message'
}

const messages = new DataCollection([message]);

messages.search('1') // null
