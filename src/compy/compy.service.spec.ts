import { Test, TestingModule } from '@nestjs/testing';
import { CompyService } from './compy.service';

describe('CompyService', () => {
  let service: CompyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompyService],
    }).compile();

    service = module.get<CompyService>(CompyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
