import { Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';

//管理数据库
@Injectable()
export class AppService {
  constructor(private readonly DbService: DbService) {}

  getHello(): any {
    // const res = this.DbService.db.collection('test').add({ name: 'zhangsan' });

    return {
      code: 200,
      message: 'success',
      data: 'hello world',
    };
  }
}
