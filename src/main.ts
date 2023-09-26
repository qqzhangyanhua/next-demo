import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //创建实例
  const app = await NestFactory.create(AppModule);
  //监听端口
  await app.listen(3001);
}
bootstrap();
