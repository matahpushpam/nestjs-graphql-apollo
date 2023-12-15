import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Todo } from 'src/models/todos.model';
import { AddTodoInput } from 'src/validators/todos.validator';
import { TodosService } from './todos.service';

@Resolver('Todos')
export class TodosResolver {
    constructor(private readonly todosService: TodosService) {

    }

    @Query(type => [Todo])
    async getTodos() {
        return this.todosService.getTodos();
    }

    @Query(type => Todo) 
    async getTodo(@Args('id') id: number) {
        return this.todosService.getTodo(id);
    }

    @Mutation(type => [Todo])
    async addTodo(@Args('input') input: AddTodoInput) {
        return this.todosService.addTodo(input);
    }
}
