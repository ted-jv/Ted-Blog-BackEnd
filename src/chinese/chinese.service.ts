import { Injectable } from '@nestjs/common';
import { CreateChineseDto } from './dto/create-chinese.dto';
import { UpdateChineseDto } from './dto/update-chinese.dto';

@Injectable()
export class ChineseService {
  create(createChineseDto: CreateChineseDto) {
    return 'This action adds a new chinese';
  }

  findAll() {
    return `This action returns all chinese`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chinese`;
  }

  update(id: number, updateChineseDto: UpdateChineseDto) {
    return `This action updates a #${id} chinese`;
  }

  remove(id: number) {
    return `This action removes a #${id} chinese`;
  }
}
