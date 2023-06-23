import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TodoService {
  async listTodos() {
    const res = await prisma.user.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return [...res];
  }

  async getTodo(id: number) {
    const res = await prisma.user.findUnique({
      where: { id },
    });

    return res;
  }
}
