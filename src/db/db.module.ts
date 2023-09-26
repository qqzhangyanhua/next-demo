import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';

// 将dbService注入到全局
// 导出DbService
@Global()
@Module({
  providers: [
    {
      provide: DbService,
      useValue: new DbService(),
    },
  ],
  exports: [DbService],
})
export class DbModule {}
