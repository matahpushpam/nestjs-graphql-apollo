import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from 'src/models/todos.model';
import { CreateTodoDto } from 'src/dto/create-todo.dto';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {

    }

    addTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo: Todo = new Todo();
        todo.title = createTodoDto.title;
        todo.completed = false;
        return this.todoRepository.save(todo);
    }

    getTodos() {
        return this.todoRepository.find();
    }

    getTodo(id: number) {
        return this.todoRepository.findOneBy({id});
    }
}
