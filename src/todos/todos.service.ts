import { Injectable } from '@nestjs/common';
import { TODOS } from 'src/data/todos.data';
import { Todo } from 'src/models/todos.model';
import { AddTodoInput } from 'src/validators/todos.validator';

@Injectable()
export class TodosService {
    todos = TODOS;

    getTodos() {
        return this.todos;
    }

    getTodo(id: number) {
        return this.todos.find(t => t.id === id);
    }

    async addTodo(input: AddTodoInput): Promise<Todo[]> {
        const lastTodo = this.todos.slice(-1).pop();
        const todo: Todo = {
            id: lastTodo.id + 1,
            title: input.title,
            completed: false
        }
        this.todos.push(todo);
        return this.todos;
    }
}
