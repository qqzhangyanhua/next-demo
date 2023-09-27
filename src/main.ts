import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
async function bootstrap() {
  //创建实例
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'hello', //加密字符串
      resave: false, //每次请求都重新设置session cookie
      saveUninitialized: false,
      name: 'nest', //cookie名称
      rolling: true, //更新session-cookie失效时间
    }),
  );
  //监听端口
  await app.listen(3001);
}
bootstrap();
