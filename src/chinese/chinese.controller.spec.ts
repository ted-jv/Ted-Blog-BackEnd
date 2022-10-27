import { Test, TestingModule } from '@nestjs/testing';
import { ChineseController } from './chinese.controller';
import { ChineseService } from './chinese.service';

describe('ChineseController', () => {
  let controller: ChineseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChineseController],
      providers: [ChineseService],
    }).compile();

    controller = module.get<ChineseController>(ChineseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
