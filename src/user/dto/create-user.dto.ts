import { UserCollectionType } from '../entities/user.entity';

// pick 取部分都是必填  Partial 可选
export type CreateUserDto = Pick<
  UserCollectionType,
  'created' | 'phone' | 'role' | 'has_person_info' | 'avatar'
>;
export type UpdateUserDto = Partial<UserCollectionType>;
export type SearchUserDto = Partial<UserCollectionType>;

export type HttpUserCreate = Pick<
  UpdateUserDto,
  'phone' | 'role' | 'has_person_info' | 'avatar'
>;

export type HttpUserInfoPost = Pick<
  UpdateUserDto,
  'name' | 'vChat' | 'graduation_time' | 'money'
> & {
  avatar?: string;
};
