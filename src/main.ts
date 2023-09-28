import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { HttpFilter } from './common/filter';
import { Response } from './common/response';
//全局中间件处理
function middlewareAll() {
  return function (req, res, next) {
    console.log('全局中间件=======');
    next();
  };
}

async function bootstrap() {
  //创建实例
  const app = await NestFactory.create(AppModule);
  // app.use(middlewareAll());
  app.use(cors());
  //全局过滤器
  app.useGlobalFilters(new HttpFilter());
  //全局拦截器
  app.useGlobalInterceptors(new Response());
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
