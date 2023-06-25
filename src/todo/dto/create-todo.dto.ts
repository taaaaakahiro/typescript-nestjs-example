import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  id?: number;
  text: string;
  userId: number;
}
