import { Model, TodoItem } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    model: Model = new Model();

    getName(): string {
        return this.model.user;
    }

    getTodoItems(): TodoItem[] {
        return this.model.items.filter(item => !item.done);
    }
}
