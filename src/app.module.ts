import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompyModule } from './compy/compy.module';
import { MapsModule } from './maps/maps.module';

@Module({
  imports: [CompyModule, MapsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
