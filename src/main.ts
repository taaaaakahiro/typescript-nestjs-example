import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; //validator

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // init validator
  app.useGlobalPipes(
    new ValidationPipe({
      //options here
    }),
  );
  await app.listen(3001);
}
bootstrap();
