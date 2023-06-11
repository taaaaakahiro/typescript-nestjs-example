import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';
import { DeleteTaskDto } from './delete-task.dto';

@Controller('todo')
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async listTasks() {
    const result = await this.prisma.task.findMany({
      where: {
        is_done: false,
      },
      orderBy: {
        id: "asc"
      },
    });
    return [...result];
  }

  @Post('')
  async postTask(@Body() task: CreateTaskDto) {
    const result = await this.prisma.task.create({
      data: task,
    });
    return {
      status: '201',
    };
  }

  @Put(':id/done')
  async updateTasks(@Param() param: UpdateTaskDto) {
    await this.prisma.task.updateMany({
      data: {
        is_done: true,
      },
      where: {
        id: parseInt(param.id),
      },
    });
    return {
      status: '204',
    };
  }

  @Delete(':id')
  async deleteTask(@Param() param: DeleteTaskDto) {
    await this.prisma.task.delete({
      // data: {
      //   is_done: true,
      // },
      where: {
        id: parseInt(param.id),
      },
    });
    return {
      status: '204',
    };
  }
}
