import { Test } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('TodoService', () => {
  let service: TodoService;

  // 前処理
  beforeEach(async () => {
    console.log('before run test');

    const module = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get(TodoService);
  });

  // テストケース
  //Get
  it('ok: getTodo id 1', async () => {
    const res = await service.getTodo(1);
    expect(res.id).toEqual(1);
    expect(res.text).toEqual('text1');
    expect(res.userId).toEqual(1);
  });

  //Post
  it('ok: createTodo userId 1 & text createdText1', async () => {
    const input = new CreateTodoDto();
    input.text = 'createdText1';
    input.userId = 1;

    const res = await service.createTodo(input);
    expect(res.text).toEqual('createdText1');
    expect(res.userId).toEqual(1);

    //Cleanup
    await prisma.todo.delete({
      where: {
        id: res.id,
      },
    });
  });
});
