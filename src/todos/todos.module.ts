import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/models/todos.model';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosResolver, TodosService]
})
export class TodosModule {}
