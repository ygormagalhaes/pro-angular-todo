export class Model {
    user: string;
    items: TodoItem[];
    constructor() {
        this.user = 'Foobar';
        this.items = [new TodoItem('Buy Flowers', false),
                      new TodoItem('Get Shoes', false),
                      new TodoItem('Collect Tickets', false),
                      new TodoItem('Call Joe', false)];
    }
}

export class TodoItem {
    constructor(public action: string, public done: boolean) {
        this.action = action;
        this.done = done;
    }
}
