import { Module } from '@nestjs/common';
import { CompyService } from './compy.service';
import { CompyController } from './compy.controller';

@Module({
  controllers: [CompyController],
  providers: [CompyService],
})
export class CompyModule {}
