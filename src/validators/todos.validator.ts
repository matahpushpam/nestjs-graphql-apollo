import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class AddTodoInput {
  @Field()
  @IsNotEmpty()
  title: string;
}