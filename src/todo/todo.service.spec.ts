import { Test } from '@nestjs/testing';
import { TodoService } from './todo.service';

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
  it('ok: getTodo id 1', async () => {
    const res = await service.getTodo(1);
    expect(res.id).toEqual(1);
    expect(res.text).toEqual('text1');
    expect(res.userId).toEqual(1);
  });
});
