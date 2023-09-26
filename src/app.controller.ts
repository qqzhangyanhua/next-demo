import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//控制器  处理路由逻辑
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
