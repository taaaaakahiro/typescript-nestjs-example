import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('OK /tood/1 (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/todo/1');
    expect(res.status).toEqual(200);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');

    const body = res.body;
    expect(body.id).toBe(1);
    expect(body.text).toBe('text1');
  });

  it('OK /todo (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/todo');
    expect(res.status).toEqual(200);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');

    const body = res.body;
    expect(body).toHaveLength(3);

    expect(body[0].id).toBe(3);
    expect(body[0].text).toBe('text3');

    expect(body[1].id).toBe(2);
    expect(body[1].text).toBe('text2');

    expect(body[2].id).toBe(1);
    expect(body[2].text).toBe('text1');
  });
});
