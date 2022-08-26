import { Test, TestingModule } from '@nestjs/testing';
import { CompyController } from './compy.controller';
import { CompyService } from './compy.service';

describe('CompyController', () => {
  let controller: CompyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompyController],
      providers: [CompyService],
    }).compile();

    controller = module.get<CompyController>(CompyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
