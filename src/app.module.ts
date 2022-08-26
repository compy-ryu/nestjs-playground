import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompyModule } from './compy/compy.module';

@Module({
  imports: [CompyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
