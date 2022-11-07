import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChineseModule } from './chinese/chinese.module';
import { LoggerMidddleware } from './middlewares/logger.middleware';
import { UsersModule } from './auth/auth.module';
import { DmsService } from './dms/dms.service';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './auth/entities/users.entity';
import { Chinese } from './chinese/entities/chinese.entity';
import { ChineseService } from './chinese/chinese.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ChineseModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Users, Chinese],
      synchronize: true, // 개발모드에서만 사용할것.
    }),
  ], //여기에 socket i.o 모듈, 인증 모듈 등 만들어서 넣으면 된다.
  controllers: [AppController], // express의 router 역할
  providers: [AppService, DmsService, AuthService, ChineseService], // 원래는 모형은 [ provide: AppService - key역할, useClass: AppServie] 이다.
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMidddleware).forRoutes('*');
  }
}
