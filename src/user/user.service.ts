import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class UserService {
  constructor(private DbService: DbService) {}
  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto新建参数====', createUserDto);
    const res = await this.DbService.db.collection('exam_user').add({
      ...createUserDto,
      created: this.DbService.db.serverDate(),
      topic_role: ['admin'],
    });
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  async findAll() {
    //先获取total
    const res = await this.DbService.db
      .collection('exam_user')
      .where({ name: 'zhangsan' })
      .count();
    const result = await this.DbService.db.collection('exam_user').get();
    return {
      code: 200,
      message: 'success',
      data: result,
      count: res.total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
