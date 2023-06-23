import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let controller: TodoController;
  let fakeTodoService: Partial<TodoService>;

  // 前処理
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: fakeTodoService,
        },
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  // TodoControllerが定義されていること
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
