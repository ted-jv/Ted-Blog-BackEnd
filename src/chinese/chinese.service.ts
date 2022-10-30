import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chinese } from './entities/chinese.entity';

@Injectable()
export class ChineseService {
  constructor(
    @InjectRepository(Chinese)
    private chineseRepository: Repository<Chinese>,
  ) {}

  findAll(): Promise<Chinese[]> {
    return this.chineseRepository.find();
  }

  // findOne(id: string): Promise<Chinese> {
  //   return this.chineseRepository.findOne(id);
  // }

  async create(chinese: Chinese): Promise<void> {
    await this.chineseRepository.save(chinese);
  }

  async remove(id: number): Promise<void> {
    await this.chineseRepository.delete(id);
  }
}
