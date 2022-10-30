import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChineseService } from './chinese.service';
import { Chinese } from './entities/chinese.entity';

@Controller('chinese')
export class ChineseController {
  constructor(private readonly chineseService: ChineseService) {}

  @Post()
  create(@Body() chinese: Chinese) {
    return this.chineseService.create(chinese);
  }

  @Get()
  findAll() {
    return this.chineseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateChineseDto: UpdateChineseDto) {
  //   return this.chineseService.update(+id, updateChineseDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chineseService.remove(+id);
  }
}
