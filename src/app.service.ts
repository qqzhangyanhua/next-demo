import { Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';

//管理数据库
@Injectable()
export class AppService {
  constructor(private readonly DbService: DbService) {}

  getHello(): string {
    const res = this.DbService.db.collection('test').add({ name: 'zhangsan' });

    return res;
  }
}
