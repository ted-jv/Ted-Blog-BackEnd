import { Module } from '@nestjs/common';
import { ChineseService } from './chinese.service';
import { ChineseController } from './chinese.controller';

@Module({
  controllers: [ChineseController],
  providers: [ChineseService]
})
export class ChineseModule {}
