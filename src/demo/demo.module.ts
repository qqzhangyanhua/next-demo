import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { Logger } from 'src/middleware';
@Module({
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule implements NestModule {
  configure(consumer) {
    //注册中间件1
    // consumer.apply(Logger).forRoutes('demo');
    //注册中间件的中间件方式2
    consumer.apply(Logger).forRoutes({
      path: 'demo',
      method: RequestMethod.GET,
    });
  }
}
