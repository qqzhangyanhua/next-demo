import {
  IsString,
  IsNumber,
  IsNotEmpty,
  length,
  Length,
} from 'class-validator';
export class CreateDemoDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 10, {
    message: '名字长度不对',
  })
  name: string;
  @IsNumber()
  age: number;
}
