// eslint-disable-next-line @typescript-eslint/no-var-requires
const tcb = require('@cloudbase/node-sdk');
import { secretKey, secretId, env } from '../../DB';
export type DbType = {
  collection: (name: string) => any; //连接数据库
  serverDate: () => any; //获取服务器时间
};

export class DbService {
  db: DbType;
  constructor() {
    console.log('数据库初始化成功===');
    const cloud_app: any = tcb.init({
      env,
      secretKey: secretKey,
      secretId: secretId,
    }); //初始化
    const db = cloud_app.database(); //连接数据库
    this.db = db;
  }
}
