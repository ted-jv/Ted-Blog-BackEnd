import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChineseModule } from './chinese/chinese.module';
import { LoggerMidddleware } from './middlewares/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot(), ChineseModule], //여기에 socket i.o 모듈, 인증 모듈 등 만들어서 넣으면 된다.
  controllers: [AppController], // express의 router 역할
  providers: [AppService], // 원래는 모형은 [ provide: AppService, useClass: AppServie] 이다.
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMidddleware).forRoutes('*');
  }
}
