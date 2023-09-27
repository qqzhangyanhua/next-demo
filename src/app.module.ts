import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { DemoModule } from './demo/demo.module';
//模块

@Module({
  imports: [
    JwtModule.register({
      secret: 'guang',
      signOptions: { expiresIn: '7d' },
    }),
    DbModule,
    UserModule,
    DemoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
