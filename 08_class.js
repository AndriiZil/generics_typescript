"use strict";
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    search(id) {
        return this.data.find(d => d.id === id) || null;
    }
}
const user = {
    id: '1',
    name: 'Max'
};
const users = new DataCollection([user]);
const message = {
    id: '2',
    text: 'Message'
};
const messages = new DataCollection([message]);
messages.search('1'); // null
