import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChineseService } from './chinese.service';
import { CreateChineseDto } from './dto/create-chinese.dto';
import { UpdateChineseDto } from './dto/update-chinese.dto';

@Controller('chinese')
export class ChineseController {
  constructor(private readonly chineseService: ChineseService) {}

  @Post()
  create(@Body() createChineseDto: CreateChineseDto) {
    return this.chineseService.create(createChineseDto);
  }

  @Get()
  findAll() {
    return this.chineseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chineseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChineseDto: UpdateChineseDto) {
    return this.chineseService.update(+id, updateChineseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chineseService.remove(+id);
  }
}
