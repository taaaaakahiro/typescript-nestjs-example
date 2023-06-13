import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';
import { DeleteTaskDto } from './delete-task.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('todo')
export class TodoController {
  @Get('list')
  async listTasks() {
    const result = await prisma.task.findMany({
      where: {
        is_done: false,
      },
      orderBy: {
        id: 'asc',
      },
    });
    return [...result];
  }

  @Post('')
  async postTask(@Body() task: CreateTaskDto) {
    const result = await prisma.task.create({
      data: task,
    });
    return {
      status: '201',
    };
  }

  @Put(':id/done')
  async updateTasks(@Param() param: UpdateTaskDto) {
    await prisma.task.updateMany({
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
    await prisma.task.delete({
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
