import { Test, TestingModule } from '@nestjs/testing';
import { ChineseService } from './chinese.service';

describe('ChineseService', () => {
  let service: ChineseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChineseService],
    }).compile();

    service = module.get<ChineseService>(ChineseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
