import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/db.config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHelloWorld(): string {
    return this.appService.getHello();
  }

  @Get('/dbhost')
  getDatabaseHost(): string {
    // env 테스트용
    const dbConfig = this.configService.get<DatabaseConfig>('database');
    return dbConfig.host;
  }
}
