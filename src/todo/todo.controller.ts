import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //全件取得
  @Get('')
  async listTodos() {
    return this.todoService.listTodos();
  }

  //1件取得(パスパラメータ指定`id`)
  @Get(':id')
  async getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getTodo(id);
  }

  //1件登録(バリデーションあり)
  @Post('')
  async postTask(@Body() input: CreateTodoDto) {
    return this.todoService.createTodo(input);
  }

  // @Put(':id/done')
  // async updateTasks(@Param() param: UpdateTaskDto) {
  //   await prisma.task.updateMany({
  //     data: {
  //       is_done: true,
  //     },
  //     where: {
  //       id: parseInt(param.id),
  //     },
  //   });
  //   return {
  //     status: '204',
  //   };
  // }

  // @Delete(':id')
  // async deleteTask(@Param() param: DeleteTaskDto) {
  //   await prisma.task.delete({
  //     // data: {
  //     //   is_done: true,
  //     // },
  //     where: {
  //       id: parseInt(param.id),
  //     },
  //   });
  //   return {
  //     status: '204',
  //   };
  // }
}
