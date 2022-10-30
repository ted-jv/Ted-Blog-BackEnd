import { Module } from '@nestjs/common';
import { ChineseService } from './chinese.service';
import { ChineseController } from './chinese.controller';
import { Chinese } from './entities/chinese.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Chinese])],
  exports: [TypeOrmModule],
  controllers: [ChineseController],
  providers: [ChineseService],
})
export class ChineseModule {}
