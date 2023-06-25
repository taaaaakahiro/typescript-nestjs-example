import { Injectable } from '@nestjs/common';
import { PrismaClient, Todo } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';

const prisma = new PrismaClient();

@Injectable()
export class TodoService {
  async listTodos(): Promise<Todo[]> {
    const res = await prisma.todo.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return [...res];
  }

  async getTodo(id: number): Promise<Todo> {
    const res = await prisma.todo.findUnique({
      where: { id },
    });

    return res;
  }

  async createTodo(input: CreateTodoDto): Promise<Todo> {
    const res = await prisma.todo.create({
      data: input,
    });

    return res;
  }
}
