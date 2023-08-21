import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('aaa');
  console.log('bbb');
  console.log('ccc');
}
bootstrap();
