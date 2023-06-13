import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common'; //validator

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'], // init buildin logger
  });

  // init validator
  app.useGlobalPipes(
    new ValidationPipe({
      //options here
    }),
  );
  Logger.log('Starting API Server...', 'PORT:' + process.env.PORT);
  await app.listen(Number(process.env.PORT));
}
bootstrap();
