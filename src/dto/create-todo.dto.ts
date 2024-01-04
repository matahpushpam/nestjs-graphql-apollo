import {
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  
  export class CreateTodoDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    title: string;
  }