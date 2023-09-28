import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Headers,
  Response,
  Session,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import * as SvgCaptcha from 'svg-captcha';
import { DemoPipe } from './demo.pipe';
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post()
  create(@Body(DemoPipe) createDemoDto: CreateDemoDto) {
    console.log('demo=======', createDemoDto);

    return this.demoService.create(createDemoDto);
  }

  @Get()
  findAll(@Request() req) {
    console.log('demo=======', req.query);
    return this.demoService.findAll(req.query);
  }
  @Get('code')
  getCode(@Response() res, @Request() req, @Session() session) {
    const captcha = SvgCaptcha.create({
      size: 4,
      noise: 2,
      color: true,
      background: '#cc9966',
    });
    session.code = captcha.text;
    console.log('session=======', session.code);
    res.type('image/svg+xml');
    res.status(200).send(captcha.data);
  }
  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log('demo=======', Body, session);
    if (Body.code.toLocaleLowerCase() === session.code.toLocaleLowerCase()) {
      return {
        code: 200,
        message: 'success',
        data: Body,
      };
    }
    return {
      code: 201,
      message: '验证码错误',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Headers() headers) {
    console.log('demo=======', id, headers); //度headers

    return this.demoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return this.demoService.update(+id, updateDemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoService.remove(+id);
  }
}
